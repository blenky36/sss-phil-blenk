## Simon's Sweet Shop Solution

Solution to Simon's Sweet Shop Challenge.

Build a solution that will enable SSS to send out packs of sweets with as little wastage as possible for any given order size. In order to achieve this, the following rules should be followed.
1. Only whole packs can be sent. Packs cannot be broken open.
2. Within the constraints of Rule1 above, send out no more Sweets than necessary to fulfil the order.
3. Within the constraints of Rules1 & 2 above, send out as few packs as possible to fulfil each order.
The solution should also be ​flexible​ enough to add or remove pack sizes as well as change current pack sizes with minimal adjustments to the program.

### Notes
In the src/_helpers/archive directory there are two files with firstAttempt and secondAttempt labels. These show the different approaches taken before getting to the current solution.

### Docker
docker build -t sss-phil-blenk .

docker run -it -p 3000:3000 sss-phil-blenk