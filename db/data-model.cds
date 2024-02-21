namespace my.ganttchart;

entity Employee {
 key Employee_Id:UUID;
  Employee_Name:String;
  Employee_Mail:String;
  Employee_Pwd:String;
  Employee_Role:String;
  Manager_Id:UUID;
  // manager: Association to Employee on Employee_Id = Manager_Id;
  projects: Association to many Project on projects.Owner_Id = $self.Employee_Id;
  tasks: Association to many Task on tasks.Employee_Id = $self.Employee_Id;
}
entity Project{
  key Project_Id:UUID;
  Description:String;
  Project_Start_Date:Date;
  Project_End_Date:Date;
  Owner_Id:UUID;
  owner: Association to Employee on owner.Employee_Id = Owner_Id;
  tasks: Composition of many Task on tasks.Project_Id = $self.Project_Id;
}
entity Task{
  key Task_Id:UUID;
  Task_Name:String;
  Task_Start_Date:Date;
  Task_End_Date:Date;
  Task_Status:Integer;
  Employee_Id:UUID;
  Parent_Task_Id:UUID;
  Project_Id:UUID;
  Task_Level:Integer;
  // parentTask: Composition of Task on Parent_Task_Id = Task_Id;
  employee: Association to Employee on employee.Employee_Id = $self.Employee_Id;
  project: Association to Project on Project_Id = $self.Project_Id;
}
