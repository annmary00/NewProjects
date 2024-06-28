document.addEventListener('DOMContentLoaded',(event)=>
{
    function capsFirst(input)
    {
        let value=input.value.trim();
        if(value)
        {
            input.value=value.charAt(0).toUpperCase()+value.slice(1);
        }
    }
    document.getElementById('firstName').addEventListener('focusout',function()
    {
        capsFirst(this);
    });
    document.getElementById('lastName').addEventListener('focusout',function()
    {
        capsFirst(this);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const requiredFields = document.querySelectorAll("input[required], select[required], textarea[required]");

    requiredFields.forEach(field => {
        field.addEventListener("focusout", function() {
            if (!field.value) {
                document.getElementById(field.id + "-error").textContent = "This field is required.";
            } else {
                document.getElementById(field.id + "-error").textContent = "";
            }
        });
    });
});

