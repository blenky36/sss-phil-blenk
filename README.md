## Simon's Sweet Shop Solution

Solution to Simon's Sweet Shop Challenge.

Build a solution that will enable SSS to send out packs of sweets with as little wastage as possible for any given order size. In order to achieve this, the following rules should be followed.
1. Only whole packs can be sent. Packs cannot be broken open.
2. Within the constraints of Rule1 above, send out no more Sweets than necessary to fulfil the order.
3. Within the constraints of Rules1 & 2 above, send out as few packs as possible to fulfil each order.
The solution should also be ​flexible​ enough to add or remove pack sizes as well as change current pack sizes with minimal adjustments to the program.

### Notes

Edge cases are handled first such as no sweets, the number of sweets being smaller than all the sweet pack sizes and the number of sweets being the same as a sweet pack size. 
The solution is then calculated by top down subtraction of the sweet pack sizes from the total number of sweets. If there is a remainder smaller than the smallest sweet pack size then the fuction is recursively called to handle that. 

Once an order has been calculated then it is optimised to make sure that the third rule is being complied with. Due to how the top down subtraction method works, there will only be a situation where there are two packs that could potentially be exchanged for one bigger. 

In the src/_helpers/archive directory there are two files with firstAttempt and secondAttempt labels. These show the different approaches taken before getting to the current solution.

### Docker
docker build -t sss-phil-blenk .

docker run -it -p 3000:3000 sss-phil-blenk