export default function getStudentIdsSum(arr) {
  return arr.reduce((a, arr) => a + arr.id, 0);
}
