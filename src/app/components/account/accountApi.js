export async function loginUser(user)
{

  var encodedPassword = encode(user.password);
  var data = "grant_type=password&username=" + user.userid + "&password=" + encodedPassword;

  const request = new Request('/token', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: data
  });

  return (await fetch(request)).json();
}
