import Url from '../models/url';
import { setupTest } from '../../test/helper';

beforeEach(async () => await setupTest());

describe('url', function() {

  const longUrl = "https://www.google.co.uk"

  describe("validation", function() {
    it('should be invalid if long url is empty', function(done) {
      const u = new Url();

      u.validate(function(err) {
        const message = "Path `longUrl` is required."
        expect(err.errors.longUrl.message).toBe(message);
        done();
      });
    });

    it("should only accept urls", function(done) {
      const u = new Url({ longUrl: "not a url" });

      u.validate(function(err) {
        const message = "Validator failed for path `longUrl` with value `not a url`";
        expect(err.errors.longUrl.message).toBe(message);
        done();
      });
    });
  });

  describe("saving", function() {

    it("shouldn't save if long url already exists", async (done) => {
      const u1 = new Url({ longUrl: longUrl });
      await u1.save();

      const u2 = new Url({ longUrl: longUrl });

      u2.save(function(err) {
        const message = "Error, expected `longUrl` to be unique. Value: `https://www.google.co.uk`";
        expect(err.errors.longUrl.message).toBe(message);
        done();
      });
    });
  });
});
