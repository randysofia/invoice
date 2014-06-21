(function() {
    var invoicer = angular.module('invoicer', []);

    invoicer.controller('invController', function($scope){
        $scope.invoice = work;

        $scope.getSubTotal = function(){
            var subtotal=0;
            for(var i=0; i < $scope.invoice.line_items.length; i++) {
                var line = $scope.invoice.line_items[i];
                subtotal += (line.hours * line.unit_price);
            }
            return subtotal;
        }

        $scope.addItem = function() {
            $scope.invoice.line_items.push(this.invoice.temp);
            $scope.invoice.temp = {};
        }

       $scope.contentLoaded = true; 

    });

    var work = 
    {
        bill_type: "Invoice",
        number: "1234",
        send_date: "June 15, 2014",
        due_date: "June 25, 2014",
        from_company: "My Company Name",
        from_address: "123 N6th St., STE 5",
        from_city: "Brooklyn",
        from_state: "NY",
        from_zip: "11211",
        from_phone: "(123) 555-5273",
        from_email: "my.email@address.com",
        to_company: "John Client",
        to_address: "456 N6th St.",
        to_city: "Brooklyn",
        to_state: "NY",
        to_zip: "11211",
        to_phone: "(555) 111-2222",
        to_email: "their.email@address.com",
        client_deposit: "50",
        line_items: [
            {
                title: "Merge Sort",
                desc: "Typed the git merge command",
                hours: "2",
                unit_price: "150"
            },
            {
                title: "Merge Sort",
                desc: "Typed the git merge command",
                hours: "2",
                unit_price: "150"
            },
        ]
    };

})();
