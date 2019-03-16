import data from './commons.js';
const { commons } = data;

/*
Markup
<section>
  <h2>Rt Hon Diane Abbott MP</h2>
  <dl>
    <dt>CONSTITUENCY</dt>
    <dd>Hackney North and Stoke Newington</dd>
    <dt>EMAIL</dt>
    <dd>diane.abbott.office@parliament.uk</dd>
    <dt>NAME</dt>
    <dd>Ms Abbott</dd>
    <dt>PARTY</dt>
    <dd>Labour</dd>
    <dt>TWITTER</dt>
    <dd>
      <dl>
        <dt>HANDLER</dt>
        <dd>@hackneyabbott</dd>
        <dt>URL</dt>
        <dd>https://twitter.com/HackneyAbbott</dd>
      </dl>
    </dd>
    <dt>WEBSITE</dt>
    <dd>http://www.dianeabbott.org.uk/</dd>
  </dl>
</section>
*/

const Mp = mp =>
  React.createElement(
    'section',
    {},
    mp.addressAs ? React.createElement('h2', {}, mp.addressAs) : '',
    React.createElement(
      'dl',
      {},
      mp.constituency ? React.createElement('dt', {}, 'Constituency') : '',
      mp.constituency ? React.createElement('dd', {}, mp.constituency) : '',
      mp.email ? React.createElement('dt', {}, 'Email') : '',
      mp.email ? React.createElement('dd', {}, mp.email) : '',
      mp.name ? React.createElement('dt', {}, 'Name') : '',
      mp.name ? React.createElement('dd', {}, mp.name) : '',
      mp.party ? React.createElement('dt', {}, 'Party') : '',
      mp.party ? React.createElement('dd', {}, mp.party) : '',
      mp.twitter ? React.createElement('dt', {}, 'Twitter') : '',
      mp.twitter
        ? React.createElement(
            'dd',
            {},
            React.createElement(
              'dl',
              {},
              React.createElement('dt', {}, 'Handler'),
              React.createElement('dd', {}, mp.twitter.handler),
              React.createElement('dt', {}, 'URL'),
              React.createElement('dd', {}, mp.twitter.url),
            ),
          )
        : '',
    ),
    mp.website ? React.createElement('dt', {}, 'Website') : '',
    mp.website ? React.createElement('dd', {}, mp.website) : '',
  );

const domContainer = document.getElementById('container');

const Commons = () =>
  commons.map(mp => React.createElement(Mp, { ...mp, key: mp.addressAs }));

ReactDOM.render(React.createElement(Commons), domContainer);
