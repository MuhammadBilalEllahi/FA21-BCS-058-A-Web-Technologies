# FA21-BCS-058-A-Web-Technologies

<a href="https://all-in-one-projects.netlify.app/" target="_blank">ALL Pojects on netlify</a>
<br/><br/>
<a href="https://ajax-exammple.netlify.app/" target="_blank">AJAX Example on netlify</a>
<br/>
<a href="https://65f22d96bacbc840ada0edcd--termproject-landing-page.netlify.app/" target="_blank">Term Poject Landing Page on netlify</a>
<br/>
<a href="https://main--vermillion-alpaca-fbf450.netlify.app/" target="_blank">Landing Page 2 AROUND on netlify</a>
<br/>
<h3>All Vercel Deployments will be Deleted (Free Version)</h3>
<h5>Click on "ALL Pojects on netlify" to see all Deployments</h5>
<a href="https://fa-21-bcs-058-a-web-technologies-zpcs.vercel.app/" target="_blank">Landing Page 1 on vercel</a>
<br/>
<a href="https://fa-21-bcs-058-a-web-technologies-9xet.vercel.app/" target="_blank">Asignment 1 on CV vercel</a>
<br/>
<a href="https://fa-21-bcs-058-a-web-technologies.vercel.app/" target="_blank">Practice on vercel</a>

<h2>How  to install mongoDB</h2>
<h5>Install on Win</h5>
<ul>
  <li>install mongodb shell <a href="https://www.mongodb.com/try/download/shell">Download Shell</a></li>
  <ol>
    <li>Extract zip file</li>
  <li>Move file to Local Drive C </li>
  <li>Create a Random/Organized folder , move the above file in this folder</li>
  <li>In extracted file , goto bin folder</li>
  <li>Copy bin path</li>
  <li>Open evironment variables, add path to both User and System</li>
  <li>Must Create a data folder in Local Drive C and Folder: db in Folder data (Folder all Empty for win10)</li>
  </ol>
  <li>install Comunity Server  <a href="https://www.mongodb.com/try/download/community">Download Server</a> </li>
  <ol>
    <li>Download the msi file.(easiest)</li>
    <li>Click on Compelte option during installation</li>
    <li>Download in Local Drive C</li>
    <li>Path variables will be set automatically(might be)</li>
    <li>BETTER! or manually set it. It might look like : C:\Program Files\MongoDB\Server\7.0\bin</li>
    <li>ADD this path to User and System Environment Variables</li>
    <li>Now Run mongod in terminal/CMD. The server should run</li>
    <li>Test again, Now Run mongosh in terminal/CMD. The server should run</li>
  </ol>

  <li>MongoDB Compass should have be automatically installed with Community Server. If unchecked during installation. Install Compass from <a href="https://www.mongodb.com/try/download/compass">Compass</a> </li>
</ul>
<a href="https://www.youtube.com/watch?v=gB6WLkSrtJk">Further info, Video Link</a>

<h5>Install on Mac</h5>
<ul>
  <li>install Comunity Server  <a href="https://www.mongodb.com/try/download/community">Download Server</a> </li>
  <ol>
    <li>Install using brew in terminal or download TGZ package</li>
    <li>Extract TGZ file </li>
    <li>Move it to Home folder, Path is /Users/yourUserName/</li>
    <li>Now set path for Mongo command (exists in bin folder of extracted file)</li>
    <li>In same Home directory /Users/yourUserName/ there exists .zshrc file</li>
    <li>Open .zshrc</li>
    <li>copy the bin path. /Users/yourUserName/mongodb-macos-x64-7.0.4/bin/</li>
    <li>Use can also copy path by opening the bin directory, clicking in view in tabs, then click Show Path Bar. It now shows path in the finder windows at the bottom right click it. and select Copy "bin" as pathname</li>
    <li> Now write : export PATH=${PATH}:(the copied path) <br>For example:  export PATH=${PATH}:/Users/yourUserName/mongodb-macos-x64-7.0.4/bin/ </li>
    <li> run source .zshrc in terminal in home directory where .zshrc is present</li>
    <li><h6>mongod command will now run in terminal but with an error saying data path not defined</h6></li>
    <li>Make directory in home directory name as data/db or run > sudo mkdir -p data/db in terminal in home directory /Users/yourUserName/</li>
    <li><h6>Now run mongod with data path </h6> <p>sudo mongod --dbpath=/Users/yourUserName/data/db <br> without sudo it will not run</p></li>
  </ol>
  <li>Now install MongoDB Compass</li>
  <li>In addition you can also install Shell</li>
</ul>
