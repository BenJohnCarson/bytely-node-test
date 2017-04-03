import factory from 'factory-girl';
import Url from '../src/models/url';

factory.define('Url', Url, {
  longUrl: "https://www.google.co.uk",
  shortCode: "abc"
})

export default factory;
