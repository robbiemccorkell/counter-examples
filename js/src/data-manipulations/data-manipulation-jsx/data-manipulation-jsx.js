const { commons } = data;

/*
Schema
{
  name: 'Rt Hon Diane Abbott MP',
  constituency: 'Hackney North and Stoke Newington',
  email: 'diane.abbott.office@parliament.uk',
  party: 'Labour',
  twitter: {
    handle: '@hackneyabbott',
    url: 'https://twitter.com/HackneyAbbott',
  },
  website: 'http://www.dianeabbott.org.uk/',
},
*/

const partyImages = {
  labour: "https://brunelstudents.com/asset/Organisation/6672/download.png",
  conservative: "http://www.thenopebook.com/wp-content/uploads/2017/08/Conservative_logo_2006.svg_-1020x685.png",
  'liberal democrat': "https://pbs.twimg.com/profile_images/2842004882/1fbd17636444a3a99ac928bf96df0b30_400x400.jpeg",
  'green party': "https://www.greenparty.org.uk/assets/logos/visual-identity/Stack/Green%20on%20White/GPEW-stack-online-gw.png"
}

const TwitterHandle = props => (
  <div>
    <img
      src="https://image.flaticon.com/icons/png/512/23/23931.png"
      width="15"
      height="15"
    />
    <a href={props.url} target="_blank">
      {props.handle}
    </a>
  </div>
);

const ProfileImages = props => {
  const partyImage = partyImages[props.party.toLowerCase()];
  return (
    <div>
      {props.twitterHandle ? <img src={`https://avatars.io/twitter/${props.twitterHandle.slice(1)}/medium`} style={{ width: 128, height: 128, marginLeft: 20}} /> : ''}
      {partyImage ? <img src={partyImage} style={{ width: 128, height: 128, marginLeft: 20}} /> : ''}
    </div>
  )
};

const ContactInfo = props => (
  <div>
    <h3>Contact:</h3>
    <p><a href={`mailto:${props.email}`}>{props.email}</a></p>
    <p><a href={props.website} target="_blank">{props.website}</a></p>
    <TwitterHandle handle={props.twitter.handle} url={props.twitter.url} />
  </div>
);

const PartySelector = props => (
  <select 
    id="party-select" 
    value={props.value}
    onChange={e => props.onSelect(e.target.value)}
  >
    <option value="">--Please choose a party--</option>
    {props.parties.map(party => (
      <option value={party} key={party}>{party}</option>
    ))}
  </select>
);


const Commons = () => {
  const [partyFilter, setPartyFilter] = React.useState("");
  const uniqueParties = [...new Set(commons.map(mp => mp.party))];
  
  return (
    <main>
      <h1>Member of Parliament list</h1>
      <p>Find your local MP:</p>
      <PartySelector 
        parties={uniqueParties} 
        value={partyFilter}
        onSelect={setPartyFilter}
      />
      {commons
        .filter(mp => !partyFilter || mp.party === partyFilter)
        .map(mp => (
        <section key={mp.name}>
          <h2>{mp.name}</h2>
          <ProfileImages twitterHandle={mp.twitter.handle} party={mp.party} />
          <p>{`Constituency: ${mp.constituency}`}</p>
          <p>{`Party: ${mp.party}`}</p>
          <ContactInfo email={mp.email} website={mp.website} twitter={mp.twitter} />
          <hr />
        </section>
      ))}
    </main>
  )
};

const domContainer = document.getElementById("container");
ReactDOM.render(<Commons />, domContainer);
