// app js

function appFeats () {

    // add confetti whenever you hit 1500 cals
    // console.log("app.js loaded")

    //ui
    const form = document.querySelector('[data-js="form"]');
    const brkfstField = document.querySelector('[data-js="brkfast-field"]');
    const lunchField = document.querySelector('[data-js="lunch-field"]');
    const dinnerField = document.querySelector('[data-js="dinner-field"]');
    const snacksField = document.querySelector('[data-js="snacks-field"]');
    const getTotal = document.querySelector('[data-js="get-total"]');
    const total = document.querySelector('[data-js="calories-reached"]');
    const totalCalsAlert = document.querySelector('[data-js="total-cals-alert"]');
    const celebrateAlert = document.querySelector('[data-js="celebrate-alert"]');

    // console.log("form:");
    // console.log(form);
    // console.log("breakfast input:");
    // console.log(brkfstField);
    // console.log("lunch input:");
    // console.log(lunchField);
    // console.log("dinner input:");
    // console.log(dinnerField);
    // console.log("snack input:");
    // console.log(snacksField);
    // console.log("get total btn:");
    // console.log(getTotal);
    // console.log("total:");
    // console.log(total);

    // prevent page reload for form
    form.addEventListener('click', (event) => {
        event.preventDefault();
    });

    // get user calories per meal time
    getValues();

    // get total calories for the day
    getTotal.addEventListener('click', () => {
        getTotalCals();
    });

    // inner functions
    function getValues() {

        brkfstField.addEventListener('focusout', () => {
            const brkValue = brkfstField.value;
            brkfstField.setAttribute('val', brkValue);
        });

        lunchField.addEventListener('focusout', () => {
            const lunchValue = lunchField.value
            lunchField.setAttribute('val', lunchValue);
        });

        dinnerField.addEventListener('focusout', () => {
            const dinValue = dinnerField.value
            dinnerField.setAttribute('val', dinValue);
        });

        snacksField.addEventListener('focusout', () => {
            const snksValue = snacksField.value
            snacksField.setAttribute('val', snksValue);
        });
    }

    function getTotalCals() {
        const totalCals = Number(brkfstField.value) + Number(lunchField.value) + Number(dinnerField.value) + Number(snacksField.value);
        total.textContent = totalCals;

        // calorie total message
        totalCalsAlert.setAttribute('role', 'alert');

        // celebrate alert
        if (totalCals >= 1500) {
            celebrateAlert.removeAttribute('hidden');
            // console.log("min cals reached");
        }
    }
    
}

// 3..2..1..Liftoff! 🚀
appFeats (); 