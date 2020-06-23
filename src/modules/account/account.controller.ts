import { Controller, Get, Render } from '@nestjs/common';

@Controller('accounts')
export class AccountController {
    @Get()
    @Render('account/views/index')
    root() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        // FB.api(
        //     'oauth/access_token',
        //     {
        //         client_id: '615859012500797',
        //         client_secret: '945a5589ba70345380bee067d15bd851',
        //         grant_type: 'client_credentials',
        //     },
        //     function (res) {
        //         if (!res || res.error) {
        //             console.log(!res ? 'error occurred' : res.error);
        //             return;
        //         }
        //
        //         const accessToken = res.access_token;
        //         console.log(accessToken);
        //     },
        // );
        // FB.api('oauth/access_token', {
        //     client_id: '615859012500797',
        //     client_secret: '945a5589ba70345380bee067d15bd851',
        //     redirect_uri: 'http://localhost:3000/accounts',
        // }, function (res) {
        //     if(!res || res.error) {
        //         console.log(!res ? 'error occurred' : res.error);
        //         return;
        //     }
        //
        //     var accessToken = res.access_token;
        //     var expires = res.expires ? res.expires : 0;
        //     console.log('adf0, ', accessToken);
        // });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        // FB.setAccessToken(
        // eslint-disable-next-line max-len
        //     'EAAIwHtmrZCT0BAExwFoLHIBN3jSQEoRGOw9bQSyHf9M5nljSFCNyWP9kh2gLZAJDte0sZAfbHRwZAWdrrumZCZAoSmASsH9XnKDjfJVQEON5Fx7lbZAr2ZCqWlQf6FhsTWkeZC39wKHGtqXpN4qFJNfvxRdZBR6wYLp485P6YASbuiVVZBt8gU0gyFSwJdKlkg5x2x7RPjjkVgzBahzor5YJPZCzUtlVzNAJ7uLYXjOZCZCWozTAZDZD',
        // );
        // FB.api('/100003624694206/photos', function (res) {
        //     console.log(res);
        // });

        // FB.api('/100003624694206/photos', function (res) {
        //     console.log(res);
        // });
        // var body = 'My first post using facebook-node-sdk';
        // FB.api('me/feed', 'post', { message: body }, function (res) {
        //     if(!res || res.error) {
        //         console.log(!res ? 'error occurred' : res.error);
        //         return;
        //     }
        //     console.log('Post Id: ' + res.id);
        // });
        return { message: 'Hello worlddssds!' };
    }
}
