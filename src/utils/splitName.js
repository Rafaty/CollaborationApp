//exemplo recebe Maria José Alencar da Silva return Maria José 
//tem bug se for o nome do Dom Pedro
export default function splitName(name) {
  const names = name.split(' ');
  let newName =name;
  switch (names.length) {
    case 2:
      newNme = name;
      break;
    case 3:
      newName = name.split(' ').slice(0, -1).join(' ');
      break;
    case 4:
      newName = name.split(' ').slice(0, -2).join(' ');
      break;
    case 5:
      newName = name.split(' ').slice(0, -3).join(' ');
      break;
    default:
      newNme = name;
  }
  return newName;
}
