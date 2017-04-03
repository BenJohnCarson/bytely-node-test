import Url from '../models/url';
import factory from '../../test/factories';
import { setupTest } from '../../test/helper';

beforeEach(async () => await setupTest());

describe('url', function() {

  const longUrl = "https://www.google.co.uk"

  describe("validation", function() {
    it('should be invalid if long url is empty', function(done) {
      factory.build('Url', { longUrl: "" }).then(url => {
        url.validate(function(err) {
          const message = "Path `longUrl` is required."
          expect(err.errors.longUrl.message).toBe(message);
          done();
        });
      });
    });

    it('should be invalid if shortCode is empty', function(done) {
      factory.build('Url', { shortCode: "" }).then(url => {
        url.validate(function(err) {
          const message = "Path `shortCode` is required."
          expect(err.errors.shortCode.message).toBe(message);
          done();
        });
      });
    });

    it("should only accept urls", function(done) {
      factory.build('Url', { longUrl: "not a url" }).then(url => {
        url.validate(function(err) {
          const message = "Validator failed for path `longUrl` with value `not a url`";
          expect(err.errors.longUrl.message).toBe(message);
          done();
        });
      });
    });
  });

  describe("saving", function() {

    it("should fail if long url already exists", async (done) => {
      factory.create('Url').then(url => {
        factory.build('Url').then(url => {
          url.save(function(err) {
            const message = "Error, expected `longUrl` to be unique. Value: `https://www.google.co.uk`";
            expect(err.errors.longUrl.message).toBe(message);
            done();
          });
        });
      });
    });
  });
});
