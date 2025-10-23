document.addEventListener('DOMContentLoaded',()=>
{
	const el1=document.getElementById("inp1");
	const el2=document.getElementById("inp2");
	const el3=document.getElementById("inp3");
	const el4=document.getElementById("inp4");
	const btn=document.getElementById("showBtn");

	btn.addEventListener("click",()=>
	{
		
		el1.value=elem2.number;
		el2.value=elem2.person;
		if(elem2.isCompleted==true)
    {
      el3.value="Выполнен";
    }
    else
    {
      el3.value="Не выполнен";
    }
		el4.value=elem2.date;
	});
});
