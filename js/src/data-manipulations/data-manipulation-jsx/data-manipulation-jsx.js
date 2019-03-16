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
    handler: '@hackneyabbott',
    url: 'https://twitter.com/HackneyAbbott',
  },
  website: 'http://www.dianeabbott.org.uk/',
},
*/

const Mp = props => {
  const { mp } = props;
  return (
    <section>
      <h2>{mp.addressAs}</h2>
      <dl>
        {mp.constituency ? <dt>Constituency</dt> : ''}
        {mp.constituency ? <dd>{mp.constituency}</dd> : ''}
        {mp.email ? <dt>Email</dt> : ''}
        {mp.email ? <dd>{mp.email}</dd> : ''}
        {mp.name ? <dt>Name</dt> : ''}
        {mp.name ? <dd>{mp.name}</dd> : ''}
        {mp.party ? <dt>Party</dt> : ''}
        {mp.party ? <dd>{mp.party}</dd> : ''}
        {mp.twitter.handler ? <dt>Twitter</dt> : ''}
        {mp.twitter.handler ? (
          <dd>
            <dl>
              <dt>Handler</dt>
              <dd>{mp.twitter.handler}</dd>
              <dt>Url</dt>
              <dd>{mp.twitter.url}</dd>
            </dl>
          </dd>
        ) : (
          ''
        )}
        {mp.website ? <dt>Website</dt> : ''}
        {mp.website ? <dd>{mp.website}</dd> : ''}
      </dl>
    </section>
  );
};

const Commons = () => commons.map(mp => <Mp key={mp.addressAs} mp={mp} />);

const domContainer = document.getElementById('container');
ReactDOM.render(<Commons />, domContainer);
