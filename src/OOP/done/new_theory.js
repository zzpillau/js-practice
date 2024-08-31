function getName() {
  return this.name;
}

function getWebsite() {
  return this.website;
}

function setWebsite(newWebsite) {
  this.website = newWebsite;
}

const make = (name, website) => {
  return {
    name,
    website,
    getName,
    getWebsite,
    setWebsite,
  }
}

const zzCompany = make('Zlaya Zaya', 'zz.com');

console.log(zzCompany);

console.log(zzCompany.getName());
console.log(zzCompany.getWebsite());
zzCompany.setWebsite('zozo.com');
console.log(zzCompany.website);

function Company(name, website) {
  this.name = name;
  this.website = website;
  this.getName = getName;
  this.getWebsite = getWebsite;
  this.setWebsite = setWebsite;
};

const zCompany = new Company('zaya zaya', 'zaya.com');

console.log(zCompany);

console.log(zCompany.getName());