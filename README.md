
<h3>PlaylistApp</h4>
<h6>A Node.js application that creates a YouTube playlist</h6>
<h4>How to run the application : </h4>
<ol>
	<li>Create a local copy of the project by any of the following steps :</li>
		<ul>
			<li>Using your terminal, clone the PlaylistApp repository to get a local copy of the same.</li>
			<li>Download the repository as zip folder.</li>
			<li>Use Clone in Desktop option </li>
		</ul>
	<li>Open terminal and go to the project directory(PlaylistApp).</li>
	<li>Type command : node server.js</li>
	<li>The following message will be displayed in the terminal : 
			App running on http://localhost:3000</li>
	<li>Go to your browser and enter the url as : http://localhost:3000</li>
	<li>You can now use the application. </li>
</ol>
<h4>Application Design :</h4>
<ol>
	<li>This is a Node.js application built using Express framework.</li>
	<li>The user can select an artist from a drop down list. By default, the first artist in the list is selected and a playlist of the selected artist is displayed on the browser.When the user selects a different artist from the drop down list, the corresponding artist's playlist is rendered.</li>
</ol>
<p>Behind the scenes :<p>
<p> An event is triggered whenever user selects a new artist from the list. This event sends an ajax request to the server and passes the selected artist name along with the request. The server matches the incoming ajax request with the corresponding route and makes a call to the youtube API. Using request module, server calls the youtube API to fetch the particular artist's videos. On receiving data successfully from the youtube API, the server parses the data as JSON and sends it to the client. </p>
<p>On the client side, the JSON received from the server is used to create HTML list(&lt;li&gt;) elements consisting of details such as video, title, and description dynamically. These list elements are added to a document fragment and then the document fragment is appended to an unordered list tag(&lt;ul&gt;) in the html body.</p>
	
	
	



 









	







