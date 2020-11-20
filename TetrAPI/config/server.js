module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ba021894901be1d302675ae9062fcc05'),
    },
  },
});


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTg4YjRiYjAyZjM2MzY3Zjg4YmQwZiIsImlhdCI6MTYwMzg4Njc0MywiZXhwIjoxNjA2NDc4NzQzfQ.FmWg_6aILPGaaah4C1Qc7JCB3azPjYuUz21-mV5ZIRI
