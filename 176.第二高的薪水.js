/** 

-- 第一次提交没领会 null 的意思, 题目是要返回一条值为null记录

-- 第一次提交
-- select DISTINCT salary SecondHighestSalary from Employee order by salary desc limit 1,1

-- 第二次提交
select(
select DISTINCT salary SecondHighestSalary from Employee order by salary desc limit 1,1
)SecondHighestSalary
 
*/
