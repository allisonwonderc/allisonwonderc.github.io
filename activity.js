<SCRIPT LANGUAGE="JavaScript">
 c1 ="<p>&quotI hope you have been well,&quot he said. &quotI need your help on a complex case. It involves computers and I know you have a knack for them.</p>" + "<button onclick=returnCheckpoint()>Tell Maxwell you don't feel qualified for the job.</button>"+"<button onclick=moveStory()>Take the offer!</button>";
c2 = "<p>You meet up with Maxwell at the Ionivation Trade Building.</p>It's on the corner of 25th and Ada Ave. You don't know much about the company, but you think you've seen something on the news about how Ionivation's stock has been exponentially increasing in value over the last few months. You enter the building and a security guard stops you.<blockquote>&quotSir, where do you think you're going?&quot</blockquote><blockquote>&quotI'm here to investigate a crime scene.&quot</blockquote><blockquote>&quotCrime scene!&quot the security guard exclaims. &quotThere's no crime scene here.&quot</blockquote>"+ "<button onclick=returnCheckpoint()>&quotAren't you a little young to be a security guard?&quot.</button>"+"<button onclick=moveStory()>&quotI'm sorry for the misunderstanding. Let me see if my friend can clear this up.&quot</button>";
c3="three";

cp1="<p>You go back to sleep. Nothing exciting happens.</p>" + "<button onclick=displayPrompt()>Well, that was no fun. Return to checkpoint.</button>";
cp2="<p>&quotDarn. I guess I'll take someone else along to this crime scene.&quot</p><br>" + "<button onclick=displayPrompt()>Oh no! Return to checkpoint.</button>";
cp3="<p>While you were insulting the security guard, Maxwell headed upstairs... and he was your ticket to the scene. Despite your attempts to produce an ID, the security guard enthusiastically escorts you from the building.</p>" + "<button onclick=displayPrompt()>Let's play nice this time. Return to checkpoint.</button>";

var initial = "<p>It's a Friday night and you're just wrapping things up at the office when your phone lights up. It's your friend Max. Answer the phone?</p>" + "<button onclick=moveStory()>Yes</button>" + "<button onclick=returnCheckpoint()>No</button>";

var chapters = new Array (initial, c1, c2, c3);
var checkpoints = new Array (cp1, cp2, cp3);

function initialize(){
document.getElementById("content").innerHTML = initial; 
}

i=0;

function displayPrompt(){
 document.getElementById("content").innerHTML = chapters[i]; 
}

function moveStory() {
 i++;
 displayPrompt();
}

function returnCheckpoint() {
document.getElementById("content").innerHTML = checkpoints[i];
}
</SCRIPT>
