var shopper = {
    firstName: "Donnie",
    lastName: "Roberts",
    itemCount: 4,
    hasCash: true,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    cart: ["bread", "alfredo sauce", "chicken breasts", "fettucini pasta",]
}