#include <iostream>
#include <cmath>

using namespace std;

int binaryToDecimal(int n)
{
    int decimal = 0, r;
    for (int i = 0; n != 0; ++i)
    {
        r = n % 10;
        n = n / 10;
        decimal = r * pow(2, i) + decimal;
    }

    return decimal;
}

int main()
{
    int n = 1000;
    cout << " Decimal of " << n << " is: " << binaryToDecimal(n) << endl;
    n = 101;
    cout << " Decimal of " << n << " is: " << binaryToDecimal(n) << endl;
    return 0;
}
