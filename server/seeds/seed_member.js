
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('member').del(),

    // Inserts seed entries
    knex('member').insert({id: 5001,
      first_name: 'Aanal',
      last_name: 'Patel',
      contact_info_id: 5001,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-1.jpg",
      phone: "+13037264083"}),
      // phone: "+17202327517"}),
    knex('member').insert({id: 5002,
      first_name: 'Angie',
      last_name: 'Gauen',
      contact_info_id: 5002,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-2.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5003,
      first_name: 'Dee',
      last_name: 'Metzger',
      contact_info_id: 5003,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-3.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5004,
      first_name: 'Audrey',
      last_name: 'Smith',
      contact_info_id: 5001,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-4.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5005,
      first_name: 'Jill',
      last_name: 'Williams',
      contact_info_id: 5002,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-5.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5006,
      first_name: 'Derek',
      last_name: 'Metzger',
      contact_info_id: 5003,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-6.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5007,
      first_name: 'Kanye',
      last_name: 'Shaw',
      contact_info_id: 5001,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-7.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5008,
      first_name: 'Autumn',
      last_name: 'Gauen',
      contact_info_id: 5002,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-8.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5009,
      first_name: 'Lee',
      last_name: 'Metzger',
      contact_info_id: 5003,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-9.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5010,
      first_name: 'Karen',
      last_name: 'Smith',
      contact_info_id: 5001,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-10.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5011,
      first_name: 'Franco',
      last_name: 'Francisco',
      contact_info_id: 5002,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-11.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5012,
      first_name: 'Eli',
      last_name: 'Umatilla',
      contact_info_id: 5003,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-12.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5013,
      first_name: 'Paul',
      last_name: 'Gaffigan',
      contact_info_id: 5001,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-13.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5014,
      first_name: 'Shane',
      last_name: 'Thomas',
      contact_info_id: 5002,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-14.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5015,
      first_name: 'Lulu',
      last_name: 'Goldmeyer',
      contact_info_id: 5003,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-15.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5016,
      first_name: 'Autumn',
      last_name: 'Gauen',
      contact_info_id: 5002,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-16.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5017,
      first_name: 'Linda',
      last_name: 'Metzger',
      contact_info_id: 5003,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-17.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5018,
      first_name: 'Karen',
      last_name: 'Smith',
      contact_info_id: 5001,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-18.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5019,
      first_name: 'Fran',
      last_name: 'Francisco',
      contact_info_id: 5002,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-19.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5020,
      first_name: 'Eli',
      last_name: 'Umatilla',
      contact_info_id: 5003,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-20.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5021,
      first_name: 'Gina',
      last_name: 'Gaffigan',
      contact_info_id: 5001,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-21.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5022,
      first_name: 'Livvy',
      last_name: 'Thomas',
      contact_info_id: 5002,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-22.jpg",
      phone: "+13037264083"}),
    knex('member').insert({id: 5023,
      first_name: 'Frieda',
      last_name: 'Goldmeyer',
      contact_info_id: 5003,
      image_url: "https://s3-us-west-1.amazonaws.com/connectbot/members/images-23.jpg",
      phone: "+13037264083"})
  );
};
