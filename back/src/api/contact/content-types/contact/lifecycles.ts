
// export default{
//   async afterCreate({result}:{result:{name:string; email:string; phone?:string; message:string}}) {

//     try {
//       console.log('📧 Attempting to send an email from:', 'hema.ahmed.ab@gmail.com');
//       console.log('📦 Message data:', result);

//       await strapi
//         .plugin('email')
//         .service('email')
//         .send({
//           to: 'hema.ahmed.ab@gmail.com',
//           subject: `📩 A new message from ${result.name}`,
//           html: `
//             <h2>📬 New message from your site</h2>
//             <p><strong>Name:</strong> ${result.name}</p>
//             <p><strong>Email:</strong> ${result.email}</p>
//             <p><strong>Phone:</strong> ${result.phone || 'غير مدخل'}</p>
//             <hr />
//             <p><strong>Message:</strong></p>
//             <p>${result.message}</p>
//           `,
//         });

//       console.log('✅ The email was sent successfully');
//     } catch (err) {
//       console.error('❌ Email sending failed:', err);
//     }
//   },
// };