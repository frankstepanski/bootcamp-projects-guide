Note: Unortunately, keeping any key in your React client, even if you are using gitignore and an .env file, is not secure. React environment variables are embedded in the build and are publicly accessible.

You should really only save API keys or secrets in your backend such as Node / Express. You can have your client send a request to your backend API, which can then make the actual API call with the API key and send the data back to your client.

https://create-react-app.dev/docs/adding-custom-environment-variables/

https://app.pluralsight.com/guides/hiding-secret-keys-in-create-react-app

put on a server:
https://unicorn-utterances.com/posts/keeping-api-keys-secret-in-react-apps/

https://www.google.com/search?q=how+to+hide+api+key+in+javascript&sa=X&ved=2ahUKEwjt5dPOgM3tAhUvuVkKHV_9BYgQ1QIoBHoECAwQBQ&biw=1752&bih=1014#kpvalbx=_-xvXX62bKe_y5gL8q5HYBQ17