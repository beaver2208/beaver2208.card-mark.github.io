 var reset = document.getElementById('reset');
        var prev = document.getElementById('prev');
        var next = document.getElementById('next');
        var td = document.getElementsByTagName('td');
        var table = document.getElementById('table');
        var spanCount = document.getElementById('spanCount');
        var countCards = td.length;
        var arrSelected = [];
        var arrNext = [];
        for (var i = 0; i < td.length; i++) {
            selectEl(i);
        }

        function selectEl(i) {
            td[i].addEventListener('click', function() {

                if (td[i].className == 'selected') {
                    td[i].className = '';
                    var el = arrSelected.pop();
                    arrNext.push(el);
                    countCards += 1;

                } else {
                    td[i].className = 'selected';
                    arrSelected.push(td[i]);
                    countCards -= 1;
                }
                spanCount.innerHTML = countCards;
            });
        };

        

        prev.addEventListener('click', function() {
            if (arrSelected.length <= 0) return;
            var el = arrSelected.pop();
            el.className = '';
            arrNext.push(el);
            countCards += 1;
            spanCount.innerHTML = countCards;

        });


        next.addEventListener('click', function() {
            if (arrNext.length == 0) return;
            var el = arrNext.pop();
            arrSelected.push(el);
            el.className = 'selected';
            countCards -= 1;
            spanCount.innerHTML = countCards;

        });

        reset.addEventListener('click', function() {
            for (var i = 0; i < td.length; i++) {
                td[i].className = '';
                countCards = td.length;
                spanCount.innerHTML = countCards;
                arrSelected = [];
                arrNext = [];
            }

        });