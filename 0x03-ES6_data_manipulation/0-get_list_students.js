export default function getListStudents() {
  const list1 = {id: 1, firstName: 'Guillame', location: 'San Francisco'};
  const list2 = {id: 2, firstName: 'James', location: 'Columbia'};
  const list3 = {id: 5, firstName: 'Serena', location: 'San Francisco'};

  return new Array(list1, list2, list3);
}
