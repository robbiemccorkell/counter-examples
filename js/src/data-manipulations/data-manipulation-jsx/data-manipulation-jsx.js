const { commons } = data;

/*
Schema
{
  addressAs: 'Rt Hon Diane Abbott MP',
  constituency: 'Hackney North and Stoke Newington',
  email: 'diane.abbott.office@parliament.uk',
  name: 'Ms Abbott',
  party: 'Labour',
  twitter: {
    username: '@hackneyabbott',
    url: 'https://twitter.com/HackneyAbbott',
  },
  website: 'http://www.dianeabbott.org.uk/',
},
*/

const Commons = () => (
  <main>
    <h1>Member of Parliament list</h1>
    <p>Find your local MP:</p>
    {commons.map(mp => (
      <section key={mp.addressAs}>
        <h2>{mp.addressAs}</h2>
        <dl>
          <dt>Constituency</dt>
          <dd>{mp.constituency}</dd>
          <dt>Email</dt>
          <dd>{mp.email}</dd>
          <dt>Name</dt>
          <dd>{mp.name}</dd>
          <dt>Party</dt>
          <dd>{mp.party}</dd>
          <dt>Twitter</dt>
          <dd>
            <dl>
              <dt>Username</dt>
              <dd>{mp.twitter.username}</dd>
              <dt>URL</dt>
              <dd>{mp.twitter.url}</dd>
            </dl>
          </dd>
          <dt>Website</dt>
          <dd>{mp.website}</dd>
        </dl>
      </section>
    ))}
  </main>
);

const domContainer = document.getElementById('container');
ReactDOM.render(<Commons />, domContainer);
