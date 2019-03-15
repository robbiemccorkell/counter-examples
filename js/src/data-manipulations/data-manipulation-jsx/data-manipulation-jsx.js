import data from './commons.js';
const commons = data.commons;

/*
Schema
{
  addressAs: 'Rt Hon Diane Abbott MP',
  constituency: 'Hackney North and Stoke Newington',
  email: 'diane.abbott.office@parliament.uk',
  name: 'Ms Abbott',
  party: 'Labour',
  twitter: {
    handler: '@hackneyabbott',
    url: 'https://twitter.com/HackneyAbbott',
  },
  website: 'http://www.dianeabbott.org.uk/',
},
*/

const Mp = mp => (
  <section>
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
          <dt>Handler</dt>
          <dd>{mp.twitter.hadler}</dd>
          <dt>Url</dt>
          <dd>{mp.twitter.url}</dd>
        </dl>
      </dd>
      <dt>Website</dt>
      <dd>{mp.website}</dd>
    </dl>
  </section>
);

const Commons = () => commons.map(mp => Mp(mp));

const domContainer = document.body;
ReactDOM.render(<Commons />, domContainer);
