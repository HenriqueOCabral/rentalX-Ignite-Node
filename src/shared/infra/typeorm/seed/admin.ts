import { hash } from 'bcrypt';
import { getConnection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const conecction = await createConnection('localhost');

  const id = uuidV4();
  const password = await hash('admin', 8);

  await conecction.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license )
        values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXX')
      `,
  );

  await conecction.close;
}

create().then(() => console.log('User Admin Created!'));
