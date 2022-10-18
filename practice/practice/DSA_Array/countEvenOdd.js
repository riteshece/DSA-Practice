function countEvenOdd(n)
{
    let even_count = 0;
    let odd_count = 0;
    while (n > 0)
    {
        let rem = n % 10;
        if (rem % 2 == 0)
            even_count++;
        else
            odd_count++;
        n = Math.floor(n / 10);
    }
   
}
console.log(countEvenOdd(445764))