/**
 
1.用 GROUP_CONCAT 分组, 获得每个部门薪水的降序排列
2.用正则匹配薪水是否在序列的前三位

select Department.name Department,Employee.name Employee,Employee.salary from Employee
left join Department on Department.id=Employee.departmentId
where exists(select 1 from
	(SELECT departmentId,GROUP_CONCAT(distinct salary order by salary desc)od FROM Employee group by departmentId) bb 
	 where Employee.departmentId=bb.departmentId and concat(bb.od,',') REGEXP concat('^([^,]+,){0,2}',Employee.salary,',')  
)

 */
