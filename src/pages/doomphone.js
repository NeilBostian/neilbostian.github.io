import { Link } from 'react-router-dom';
import { CopyBlock, github } from 'react-code-blocks';
import styled from 'styled-components';

import doomTitle from './doomphone/doom-title.png';
import doomphone1 from './doomphone/doomphone1.png';
import helloWorld from './doomphone/hello-world.png';
import polycomFileBrowser from './doomphone/polycom-file-browser.png';
import polycomAdminWebserver from './doomphone/polycom-admin-webserver.png';
import polycomAdminBrowser from './doomphone/polycom-admin-browser.png';
import uploadBackgroundUi from './doomphone/upload-background-ui.png';
import uploadBackgroundRequest from './doomphone/upload-background-request.png';
import sshTerminal from './doomphone/ssh-terminal.png';
import rawPixels from './doomphone/rawpixels.png';
import displayDriver from './doomphone/display-driver.png';
import scancodes from './doomphone/scancodes.png';

const Italic = styled.span`
  font-style: italic;
`;

const Code = styled.span`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  font-size: 0.8em;
`;

function LinkScrollToElement({ elementId, children }) {
  function onElementClicked(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const elem = document.getElementById(elementId);
    if (elem) elem.scrollIntoView();
  }

  return (
    <a href="#" onClick={onElementClicked}>
      {children}
    </a>
  );
}

function BlogTitle({ title, summary, publishDate }) {
  return (
    <>
      <h2 style={{ textDecoration: 'none', marginBottom: '0.25em' }}>
        <Link to="/">Neil's Place</Link> / {title}
      </h2>
      <p style={{ margin: '0' }}>{summary}</p>
      <span style={{ fontStyle: 'italic', fontSize: '0.7em' }}>Published {publishDate}</span>
    </>
  );
}

function CenterImg({ src, alt, height, width }) {
  let divStyle = { textAlign: 'center' };
  let imgStyle = {};

  if (height) {
    divStyle.height = height;
    imgStyle.height = '100%';
    imgStyle.width = 'auto';
  } else if (width) {
    imgStyle.height = 'auto';
    imgStyle.width = '100%';
    imgStyle.maxWidth = width;
  } else {
    divStyle.height = '15em';
    imgStyle.height = '100%';
    imgStyle.width = 'auto';
  }

  return (
    <div style={divStyle}>
      <img src={src} alt={alt} style={imgStyle} />
    </div>
  );
}

export default function DoomPhone() {
  return (
    <>
      <BlogTitle
        title="DoomPhone"
        summary={
          <>
            Technical Review: How I hacked an office telephone to play{' '}
            <a href="https://en.wikipedia.org/wiki/Doom_(1993_video_game)">DOOM</a>
          </>
        }
        publishDate="2021-07-15"
      />

      <h3>Contents</h3>
      <ol>
        <li>
          <LinkScrollToElement elementId="doomphone-background">Background</LinkScrollToElement>
        </li>
        <li>
          <LinkScrollToElement elementId="doomphone-hacking-the-phone">Hacking the phone</LinkScrollToElement>
        </li>
        <li>
          <LinkScrollToElement elementId="doomphone-making-it-run-doom">Make it run DOOM</LinkScrollToElement>
          <ul>
            <li>
              <LinkScrollToElement elementId="doomphone-display-driver">Display Driver</LinkScrollToElement>
            </li>
            <li>
              <LinkScrollToElement elementId="doomphone-keypad-driver">Keypad Driver</LinkScrollToElement>
            </li>
            <li>Putting Everything Together</li>
          </ul>
        </li>
        <li>Conclusion</li>
      </ol>

      <CenterImg src={doomTitle} width="600px" alt="DOOM logo" />

      <h3 id="doomphone-background">Background</h3>
      <p>
        In late 2017 I was a new hire on a small (maybe 10 person) IT team. We generally had an option to take hardware
        for ourselves if the alternative was to be thrown out. Everyone in our office was issued a Polycom desk phone,
        and occasionally they were retired in favor of newer models. One afternoon we upgraded a user's phone, and I
        took my opportunity. That night I went home with a Polycom VXX600 and a mission to make it run DOOM.
      </p>
      <p>
        The VXX600 has a standard 12-keypad, a "Home" button, volume rocker, and three buttons to mute, use the speaker,
        or use a headset. This is standard for most polycom phone models, but the VXX600 also comes equipped with a
        touch screen.
      </p>
      <p>
        The phone has a basic web browser intended for 3rd party IT teams to provision custom apps to their users. I
        created a basic html page with <Code>&lt;input type='file' /&gt;</Code> to browse the file system.
      </p>
      <CenterImg src={polycomFileBrowser} alt="Polycom phone file browser" width="480px" />
      <p>
        <Italic>Nice.</Italic> It runs linux, <Italic>this will be easy</Italic>. Using the file browser I can view the
        entire file system, create directories, and with the touch screen I can drag and drop files and directories into{' '}
        <Italic>subdirectories</Italic>. Because of how the file browser works there is no way to move objects to a
        parent directory.
      </p>
      <p>
        Ultimately the ability to move files didn't get me closer to hacking the phone and I needed a new strategy.
        Polycom has a <a href="http://voipt2.polycom.com/">large list of firmware versions</a> and allows you to freely
        upgrade/downgrade to any version supported by your model. <Italic>Perhaps I can exploit that...</Italic>
      </p>
      <p>
        Each night after work I tried to reverse engineer Polycom's firmware to give myself a backdoor. Every attempt to
        update my phone using custom firmware was rejected. These phones are also <Italic>painfully slow</Italic>. A
        full update cycle runs more than 10 minutes, so I was unlikely to make progress by trying more of the same.
      </p>
      <p>
        So I did the rational thing and gave up. But I gained knowledge and experience — a worthy trade. I'll admit, in
        retrospect this was a really ambitious task. I also have a tendency to underestimate difficulty.
      </p>
      <p>
        Nobody succeeds in the software industry without tenacity. I don't know what came over me in May '21, almost 4
        years later. Maybe it was a subconscious feeling of defeat. So I did the irrational thing and bought a
        refurbished Polycom VXX600.
      </p>

      <h3>A Brief Word of Wisdom</h3>
      <p>
        Between 2017 and today I've worked the majority of my professional career. Since then I've learned that the most
        vulnerable parts of a system are the parts whose users are trusted by the developer. These parts of the system
        are always the lowest priority for security assessment and patching for two reasons.
      </p>
      <p>
        1. Nobody buys a Polycom phone because it has a good admin interface. Polycom sells phones because they provide
        a product that looks polished, affordable, and suitable for their customer. That means Polycom spends more
        resources (employee time) developing end-user features, and fewer resources developing tools to provision and
        administrate.
      </p>
      <p>
        2. Developers are eventually forced to trust the end user won't maliciously use a feature to damage the system.
        If IT personnel abuse admin privileges to the company's Polycom phones it's a problem for the company, not
        Polycom.
      </p>

      <CenterImg src={doomphone1} width="600px" alt="Polycom phone running DOOM" />

      <h3 id="doomphone-hacking-the-phone">Hacking the Phone</h3>
      <p>
        With that wisdom in mind, let's see if we can find a vulnerability in the VXX600's admin interface. When factory
        reset, I can login to my phone's admin settings using password <Code>456</Code>. Poking around reveals a section
        titled "Web Server Configuration". Let's enable that and save settings. The phone will reboot itself.
      </p>
      <CenterImg
        src={polycomAdminWebserver}
        width="480px"
        alt="Polycom phone's admin screen for web server configuration"
      />
      <p>
        Now I can login from my PC's web browser. My phone is wired via ethernet, and from my router I see it is
        connected on IP <Code>192.168.1.4</Code>. Login using the same admin password that gave us access on the phone,{' '}
        <Code>456</Code>.
      </p>
      <p>
        While we're here, lets make sure the microbrowser is enabled so later we can use the phone's file manager. I
        also set the home page to my PC so I can host any html/js for the phone to render.
      </p>
      <CenterImg src={polycomAdminBrowser} width="600px" alt="Polycom webserver admin screen for microbrowser" />
      <p>Let's see what else exists in this interface...</p>
      <CenterImg
        src={uploadBackgroundUi}
        width="600px"
        alt="Polycom webserver admin screen to upload a custom background image"
      />
      <p>
        We can upload our own file as a background image. I bet we can exploit this, let's take a closer look at the
        request.
      </p>
      <CenterImg src={uploadBackgroundRequest} width="600px" alt="Request body from upload background image" />
      <p>
        Next let's replicate this from our favorite programming language. I chose C# because it has the tools I need.{' '}
        <a href="https://github.com/NeilBostian/DoomPhone/blob/main/UploadFile/Program.cs">Check out the source here</a>
        . The server responded with <Code>OK 200</Code>, but the response text says <Code>INTERNAL_ERROR</Code>. I think
        we need to find this file to make sure it exists.
      </p>
      <p>
        Previously in the admin UI I enabled my phone's web browser and set the home page to{' '}
        <Code>http://192.168.1.101:5000</Code> (my PC). Let's spin up a web server with debug tools.{' '}
        <a href="https://github.com/NeilBostian/DoomPhone/tree/main/WebServer">See the source here</a>. The file was
        uploaded to <Code>/rfs0/helloworld.txt</Code> and our debug tools show the contents match what we uploaded.{' '}
        <Italic>Sweet.</Italic>
      </p>
      <CenterImg src={helloWorld} width="480px" alt="Contents of 'helloworld.txt' file we uploaded" />
      <p>
        Further investigation shows that if the <Code>fileName</Code> parameter in our C# script contains a relative
        path, the file is still uploaded but in a different directory.{' '}
        <Italic>
          Note: I tried this with multiple firmware versions, it was fixed in one of the 5.9.x minor patches. The
          entirety of my work was completed using firmware <a href="http://voipt2.polycom.com/590/">5.9.0</a>, which
          contains the relative path exploit.
        </Italic>
      </p>
      <p>
        So where do we stand:
        <ul style={{ listStyleType: 'none' }}>
          <li>✔ We can create new directories</li>
          <li>✔ We can create new files with specific content</li>
          <li>✔ We can move files and directories (with some caveats)</li>
        </ul>
        Now we need to figure out which files/directories to add that will blow this wide open.
      </p>
      <p>
        Let's check the boot sequence. We can view the contents of all the below files using our webserver debug tool.
      </p>
      <ul>
        <li>
          <Code>/etc/init.d/rcS</Code> runs on system boot and launches each script in <Code>/etc/rcS.d/S*</Code>.
        </li>
        <li>
          I could create a script that matches the pattern <Code>/etc/rcS.d/S*</Code>, but the file upload probably
          doesn't save files with execute permission. That means the script won't be run. Let's keep looking...
        </li>
        <li>
          <Code>/etc/rcS.d/launchapp</Code> starts another init script, <Code>/usr/local/etc/init.d/rcS</Code>:
        </li>
      </ul>

      <CopyBlock
        text={`# Startup any daemon scripts
for e in \`ls -1 /usr/local/etc/rcS.d/S* 2> /dev/null\`;
do
  if echo $e | grep "S70dbus"; then
    . $e
  else
    $e
  fi
done`}
        language="shell"
        showLineNumbers={true}
        theme={github}
      />

      <p>
        <Italic>Score.</Italic> For some reason, script <Code>/usr/local/etc/rcS.d/S70dbus</Code> couldn't be executed
        directly and was sourced into the shell that was already executing <Code>/usr/local/etc/init.d/rcS</Code> (see
        line 5 👆🏻). One nice feature of <a href="https://unix.stackexchange.com/a/114301">sourced scripts</a> is they
        don't require execute permissions on the sourced file. Thankfully whoever left this here checked equality using
        grep, so if we upload a file named <Code>S70dbus-neil-bootstrap.sh</Code> it should run on system boot.
      </p>
      <p>Using our web server / file browser, create directories</p>
      <ul>
        <li>
          <Code>/usr/local/1</Code> — We'll write a shell script that watches this directory and executes anything we
          drop into it
        </li>
        <li>
          <Code>/usr/local/2</Code> — This stores the output logs from the scripts we drop in directory <Code>1</Code>
        </li>
      </ul>
      <p>Next we upload a file using our C# script:</p>
      <ul>
        <li>
          <Code>fileName = "../usr/local/etc/rcS.d/S70dbus-neil-bootstrap.sh";</Code>
        </li>
        <li>
          <Code>fileContent = ". /usr/local/neil-hack.sh &amp;";</Code>
        </li>
      </ul>
      <p>
        Then we upload <Code>neil-hack.sh</Code>
      </p>
      <ul>
        <li>
          <Code>fileName = "../usr/local/neil-hack.sh";</Code>
        </li>
        <li>
          <Code>fileContent: </Code>
        </li>
      </ul>
      <CopyBlock
        text={`DIR=/usr/local/1
LOG=/usr/local/2

while :
do
  for file in $DIR/*
  do
    [ -f "$file" ] || break
    FILENAME="$(date +%Y-%m-%d_%H:%M:%S_)$(basename $file).txt"
    . $file > "$LOG/$FILENAME" 2>&1
    rm $file
  done

  sleep 1
done`}
        language="shell"
        showLineNumbers={false}
        theme={github}
      />
      <p>
        Finally, we reboot our phone. On startup, <Code>neil-hack.sh</Code> will run in the background waiting for us to
        drop scripts into dir <Code>/usr/local/1</Code>. Once the phone reboots, upload a sample script to confirm and
        check the output in <Code>/usr/local/2</Code>.
      </p>
      <ul>
        <li>
          <Code>fileName = "../usr/local/1/hello-world.sh";</Code>
        </li>
        <li>
          <Code>fileContent = "echo 'Hello world! From neil-hack.sh'"</Code>
        </li>
      </ul>
      <p>
        The next script changes the system <Code>root</Code> password and enables dropbear, a ssh-compatible server.
        Upload this, then ssh from our pc:
      </p>
      <ul>
        <li>
          <Code>fileName = "../usr/local/1/enable-ssh.sh";</Code>
        </li>
        <li>
          <Code>fileContent: </Code>
        </li>
      </ul>
      <CopyBlock
        text={`echo "456
456" | passwd root

/usr/local/sbin/dropbear -p 2222`}
        language="shell"
        showLineNumbers={false}
        theme={github}
      />
      <ul>
        <li>
          <Code>ssh root@192.168.1.4 -p 2222</Code> — Login with password "456", set in the previous script.
        </li>
      </ul>
      <CenterImg src={sshTerminal} width="600px" alt="Ubuntu terminal connected to the phone via ssh" />

      <h3 id="doomphone-making-it-run-doom">Make it run DOOM</h3>
      <p>Before digging into the details of running doom, we need some tools:</p>
      <ul>
        <li>
          <Code>
            <a href="https://packages.ubuntu.com/bionic/sshpass">sshpass</a>
          </Code>{' '}
          — This lets us script our ssh commands with password iterate more quickly
        </li>
        <li>
          <Code>
            <a href="https://packages.ubuntu.com/bionic/gcc-arm-linux-gnueabi">arm-linux-gnueabi-gcc</a>
          </Code>{' '}
          — An ARMv6 linux cross compiler
        </li>
      </ul>
      <p>
        Cross-compile <a href="https://github.com/NeilBostian/DoomPhone/tree/main/helloworld">helloworld</a> and execute
        on the phone to confirm we have a working build environment.
      </p>

      <h4 id="doomphone-display-driver">Writing the Display Driver</h4>
      <p>
        <Code>ls /dev</Code> reveals <Code>/dev/fb0</Code> which we can use to read and write to the screen. This can be
        quickly tested by writing junk into the framebuffer: <Code>cat /dev/urandom &gt; /dev/fb0</Code>. To write
        something less random to the framebuffer, first find the resolution:
      </p>
      <CopyBlock
        text={`# cat /sys/class/graphics/fb0/virtual_size
480,544`}
        language="shell"
        showLineNumbers={false}
        theme={github}
      />
      <p>
        Then we need to figure out the pixel encoding. Run <Code>take_screenshot screenshot.raw</Code> (from
        shell-extensions) to capture the framebuffer contents. To determine format we can upload the image to{' '}
        <a href="http://rawpixels.net">rawpixels.net</a> and play with the settings until it looks correct.
      </p>
      <CenterImg src={rawPixels} width="600px" alt="Our framebuffer settings decoded using rawpixels.net" />
      <p>
        The framebuffer is using RGB565, which uses 16-bits to store an RGB value. 5-bits for red, 6-bits for green, and
        5-bits for blue.
      </p>
      <p>
        Note the resolution says height of 544, but the actual image height is 272. The first and second half of the
        framebuffer are identical, so we can cut it in half to get our screen contents. I don't know why this happens,
        but we can easily make our display driver duplicate pixels to both halves of the framebuffer. Like I always say,
        "As long as it works..." 😉
      </p>
      <p>
        Now we write a simple C program that writes into the framebuffer.{' '}
        <a href="https://github.com/NeilBostian/DoomPhone/tree/main/display-driver">Check out the source code here</a>.
        When we run this, we get a nice rainbow that scrolls across the screen.{' '}
        <Italic>
          Note: The polycom gui continues writing to the framebuffer which causes our display driver to flicker. This is
          fixed by pausing the polycom background processes, see{' '}
          <a href="https://github.com/NeilBostian/DoomPhone/tree/main/phone-utils">phone-utils</a>.
        </Italic>
      </p>
      <CenterImg src={displayDriver} width="480px" alt="Screenshot of display driver rainbow" />

      <h4 id="doomphone-keypad-driver">Writing the Keypad Driver</h4>
      <p>
        The keypad driver is relatively straight forward. The init script <Code>/etc/rcS.d/S13keypad</Code> indicates
        keypad events come through <Code>/dev/input/event0</Code>. Let's write a program to read from stdin and output
        the bytes as hex values (<a href="https://github.com/NeilBostian/DoomPhone/tree/main/keypad-driver">see here</a>
        ). Then we can interpret the scancodes and translate it to key events.{' '}
        <Italic>Note the build script launches the sample program with </Italic>{' '}
        <Code> cat /dev/input/event0 | /keypad-driver</Code> so the events make it to stdin.
      </p>
      <p>
        Key events correspond to pressing or releasing a button. Each event sends a 16-byte payload, with the 11th byte
        corresponding to which button sent the event, and the 13th byte corresponding to whether the button was pressed
        or released.
      </p>
      <CenterImg src={scancodes} width="585px" alt="Screenshot of display driver rainbow" />
    </>
  );
}
