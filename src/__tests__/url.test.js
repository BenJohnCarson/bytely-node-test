import Url from '../models/url';

describe('url', function() {
  it('should be invalid if long url is empty', function(done) {
    const u = new Url();

    u.validate(function(err) {
      expect(err.errors.longUrl).toBeDefined();
      done();
    });
  });
});
