export const HELLO_QUERIES = {
  insertHello: 'insert into HELLO values (:name, :world)',
  insertHelloChild: 'insert into HELLO_CHILD values (:hello, :firstName, :surname, :dob)',
  getHello: 'select * from HELLO where name = :name',
  getHelloChild: '',
  getoracleSPResult: 'Select REGIONID from Prudentialcfg.Mcl_Vf_Avg'
};
