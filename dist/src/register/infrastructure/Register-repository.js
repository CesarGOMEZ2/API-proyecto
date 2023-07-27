"use strict";
// import { CreateRegister } from "../domain/CreateRegister";
// import { Register } from "../domain/Register";
// import amqp from 'amqplib';
// // const rabbitSettings = {
// //   protocol: 'amqp',
// //   hostname: '34.199.194.98',
// //   port: 5672,
// //   username: 'angel',
// //   password: 'angel',
// };
// export class AddRegisterRepository implements CreateRegister {
//   async addRegister(
//     //id: string,
//     distancia: string,
// ): Promise<Register | null> {
//   try {
//     const Registro = new Register( distancia);
//       const queue = "Usuarios";
//       const message = distancia; 
//       console.log("mensaje de rabbit", message);
//         try {
//           const conn = await amqp.connect();
//           console.log('Conexión exitosa');
//           const channel = await conn.createChannel();
//           console.log('Canal creado exitosamente');
//           const res = await channel.assertQueue(queue);
//           console.log('Cola creada exitosamente', res);
//           // Insertar el mensaje en la cola
//            await channel.sendToQueue(queue, Buffer.from(message));
//           console.log(`Mensaje insertado en la cola: ${message}`);
//         } catch (error) {
//           console.log(error)
//           throw error;
//         }
//       return Registro;
//     } catch (error) {
//       throw new Error(`No se pudo agregar el Registro: ${error}`);
//     } finally {
//     }
//   }
// }
