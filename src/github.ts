import axios from 'axios';
import cheerio from 'cheerio';

export default async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://education.github.com/discount_requests/student_application`,
      // Set the content type header, so that we get the response in JSON
      headers: {
        Host: 'education.github.com',
        'User-Agent':
          'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-GB,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        Referer: 'https://education.github.com/',
        Connection: 'keep-alive',
        Cookie:
          '_octo=GH1.1.1112847921.1620355635; logged_in=yes; dotcom_user=AbdumalikDev; _education_session=YlI0ZEdlU0orNVRUbFkyajZtTitTMTYzSjZuUGR0V3pIc3pwdGZhTXVmeGNHYmpjdFd4d1dURjRYN1B0TDZHYXEzSFpXeTQ3QnNKVVdORGQ5OTdMRTM3UVBxVXRHYTJtc25mL1JmQjFVUHRsT0k5WVo0MzF0VnNGSHZ6cHEyNnlIS0J0THluTml4V1BucFNVTURpY1BJZUNPaEJDRGhRcmNFbk9ZYnRkeTQzM2FvWUJydis3ZlRvNE41REFsV0ZhWDNUSHZBWWtEZkRTelFVUDN5M2Z0NGdwNFFPN0kzUElzSXhBSCtzcjBQQ3IxK0pRY2EwdG5ZZEN3OWJmVzJNTE0xSlZ2Y1JzQ1EzTWFGQUhJZHZIRHowdUphMjQ1NXVYa3hTWEpRbGpJMThRcVRLbGtLT2gzdjZtcnlVSWg5dWQvVEZUUFJrYndUVmdDaU1weE1uTFB3dWJYTEllOGFVQTZzTTlVazJhYndMbkFWbnlsMEI1RnFSVVFrZkh3YVVQM1l2S3NCN3ZITGsvdEc2Q3YrZml5TW01ZFVRRVBUMVRYNmhyVmVQMW5LUmFFaGN4NVFGdEhyUlpQVS82RGxTRWV2dHRFQ0RUcEM4TTFYQXRlZDZiSmE0eDhoWjJNZS9tTDVNY25Wa1lhZ2FSL2IwKzBIdzZsUmx0ekJLYVdRWHlad05rU292VUcwTGlDdTVHZlBUVFIzWjJtZGtiM0cxM2NhekJPZFB3UE84dm8xMkNxaUpsbkJFY2pZcnBYYU5kbkhKNGNkZkFIc0tQdkVvQzdES3JmWmhvalJFaHJybXMxTDVDVnFsUEUwUT0tLWJRVzdJZ3IwRTVZZnUxeEdwT2VPK2c9PQ%3D%3D--ea1b78c4dc50869da2c3b375539ad9bc187a2e5a; color_mode=%7B%22color_mode%22%3A%22light%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D',
        'Upgrade-Insecure-Requests': '1',
        'If-None-Match': 'W/"90e94d7b558e58ade0dc2d80cc6e26c3"',
        'Cache-Control': 'max-age=0, no-cache',
        TE: 'Trailers',
        Pragma: 'no-cache',
      },
    });

    const $ = cheerio.load(response.data);

    const state = $('span.mr-6').find('strong.State').text();

    return state;
  } catch (error) {
    console.log(error);
  }
};
