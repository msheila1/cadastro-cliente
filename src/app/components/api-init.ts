export class Init {
    load() {
      if(localStorage.getItem('api') === null || localStorage.getItem('api') == undefined) {
        console.log('No api Found... Creating...');
        let clients = [
          {
            id:1,
            firstName:'Maria Sheila',
            rgClient:'409912350',
            cpf:'32623599901',
            email:'msheilacarneiro@gmail.com',
            empresa: ['Carrefour']
          }, 
          {
            id:2,
            firstName:'Afonso Silva',
            rgClient:'2569585',
            cpf:'42526988807',
            email:'afonso@gmail.com',
            empresa: ['Outros']
          }, 
          {
            id:3,
            firstName:'Clarice Carneiro',
            rgClient:'325029014',
            cpf:'42523614589',
            email:'clarice@gmail.com',
            empresa: ['Carrefour']
          },
          {
            id:4,
            firstName:'Marcos Gama',
            rgClient:'56933645',
            cpf:'32523888801',
            email:'marcos@gmail.com',
            empresa: ['Carrefour']
          },
        ];
  
        localStorage.setItem('api', JSON.stringify(clients));
        return 
      } else {
        console.log('Found api...');
      }
    }
  }