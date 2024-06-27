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
