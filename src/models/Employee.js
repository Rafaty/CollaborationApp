export default Employee = {
    name: 'Employee',
    primaryKey: 'idLocal',
    properties: {
        idLocal: { type: 'int', indexed: true },
        id: 'int',
        nome: 'string',
        cpf: 'string',
        sync: 'bool',

    },
};


