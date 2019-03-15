import data from './commons.js';
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

// Model
const commons = data.commons;

// View
const domContainer = document.body;

// Template
const createDescritionTerm = term => {
  const dt = document.createElement('dt');
  dt.innerText = term.toUpperCase();
  return dt;
};

const createDescriptionDetail = detail => {
  const dd = document.createElement('dd');
  if (detail instanceof Object) {
    return dd;
  }
  dd.innerText = detail;
  return dd;
};

const createHeading2 = title => {
  const h2 = document.createElement('h2');
  h2.innerText = title;
  return h2;
};

commons.map(mp => {
  const section = document.createElement('section');
  const descriptionList = document.createElement('dl');

  const h2 = createHeading2(mp.addressAs);
  delete mp.addressAs;
  Object.entries(mp).forEach(([key, value]) => {
    if (value) {
      const term = createDescritionTerm(key);
      const detail = createDescriptionDetail(value);

      descriptionList.appendChild(term);
      descriptionList.appendChild(detail);

      if (value && key === 'twitter') {
        const twitterDescriptionList = document.createElement('dl');

        Object.entries(mp.twitter).forEach(([key, value]) => {
          const twitterTerm = createDescritionTerm(key);
          const twitterDetail = createDescriptionDetail(value);

          twitterDescriptionList.appendChild(twitterTerm);
          twitterDescriptionList.appendChild(twitterDetail);
        });

        detail.appendChild(twitterDescriptionList);
      }
    }
  });

  section.appendChild(h2);
  section.appendChild(descriptionList);

  domContainer.appendChild(section);
});
