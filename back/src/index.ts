// import type { Core } from '@strapi/strapi';

// export default {
//   /**
//    * An asynchronous register function that runs before
//    * your application is initialized.
//    *
//    * This gives you an opportunity to extend code.
//    */
//   register(/* { strapi }: { strapi: Core.Strapi } */) {},

//   /**
//    * An asynchronous bootstrap function that runs before
//    * your application gets started.
//    *
//    * This gives you an opportunity to set up your data model,
//    * run jobs, or perform some special logic.
//    */
//   bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {
    
//   },








  
// src/index.ts
export default {
  async bootstrap({ strapi }: { strapi: any }) {
    console.log('🚀🚀🚀 Bootstrap is running on Windows! 🚀🚀🚀');

    strapi.db.lifecycles.subscribe({
      models: ['api::contact.contact'],
      async afterCreate(event: any) {
        console.log('📧 afterCreate executed!', event.result);
        try {
          await strapi
            .plugin('email')
            .service('email')
            .send({
              to: 'hema.ahmed.ab@gmail.com',
              subject: `📩 New message from ${event.result.name}`,
              html: `
                <h2>📬 New message from your site</h2>
                <p><strong>Name:</strong> ${event.result.name}</p>
                <p><strong>Email:</strong> ${event.result.email}</p>
                <p><strong>Phone:</strong> ${event.result.phone || 'Not provided'}</p>
                <hr />
                <p><strong>Message:</strong></p>
                <p>${event.result.message}</p>
              `,
            });
          console.log('✅ Email sent successfully');
        } catch (err) {
          console.error('❌ Error sending email:', err);
        }
      },
    });
  },
};
