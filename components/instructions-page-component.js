export default {
  name: 'instructions-page-component',
  template: /* html */ `
    <section class="container py-4">
      <h1 class="h3 mb-3">Instructions</h1>
      <h2 class="h4 mb-2">How I Do It</h2>
      <p class="text-light mb-4">Building a PC is like putting together a big, exciting puzzle. The full step-by-step guide is now on the Instructions page so the home page stays simple and easy to read.</p>

      <div class="card border-0 shadow-sm p-4">
        <p class="mb-3">Building a PC is like assembling a giant, expensive Lego set. Gather a magnetic Phillips-head screwdriver, find a large, flat, static-free workspace, and follow these steps.</p>
        <ol class="mb-0 ps-3">
          <li class="mb-3"><strong>Step 1: Install the Processor (CPU)</strong><br />Take your motherboard out of its box and lay it on top of its anti-static bag or cardboard box. Lift the retention arm on the motherboard's CPU socket. Align the golden triangle or small notch on the corner of your CPU with the matching mark on the socket. Drop the CPU straight down gently, and push the retention arm back down to lock it in place.</li>
          <li class="mb-3"><strong>Step 2: Install the Solid State Drive (SSD)</strong><br />If you are using an M.2 SSD, unscrew the small heat sink cover on the motherboard. Gently slide the M.2 drive into the slot at a slight angle, push it down flat, and secure it with the provided small screw. Then, replace the heat sink cover.</li>
          <li class="mb-3"><strong>Step 3: Install the Memory (RAM)</strong><br />Check your motherboard manual to see which slots to populate first. Unlock the clips on the sides of the RAM slots. Align the notch on the bottom of your RAM stick with the raised bump in the slot. Press down firmly on both ends until you hear a clear click and the clips pop back into place.</li>
          <li class="mb-3"><strong>Step 4: Install the CPU Cooler</strong><br />Apply a small pea-sized dot of thermal paste to the center of the CPU if your cooler does not have it pre-applied. Mount the CPU cooler bracket, place the cooler on top of the CPU, and screw it in evenly in an 'X' pattern. Plug the cooler's fan cable into the specific header on the motherboard labeled CPU_FAN.</li>
          <li class="mb-3"><strong>Step 5: Prepare the Computer Case</strong><br />Remove both side panels of your PC case. Take out the included screws and accessories. If your motherboard does not have an integrated rear I/O shield, push the metal I/O shield into the rectangular opening at the back of the case until it clicks.</li>
          <li class="mb-3"><strong>Step 6: Install the Power Supply (PSU)</strong><br />Slide your power supply into the designated area in the case (usually the bottom rear). Orient it so the power supply fan is facing the air vent on the outside of the case. Secure the power supply to the back of the case using the provided screws.</li>
          <li class="mb-3"><strong>Step 7: Install the Motherboard</strong><br />Ensure your case has the correct standoffs installed that match your motherboard's size (such as ATX or Micro-ATX). Carefully lower your motherboard assembly into the case, angling it so the ports slide into the I/O shield at the back. Line up the motherboard screw holes with the case standoffs and secure it using the provided screws.</li>
          <li class="mb-3"><strong>Step 8: Connect Basic Power Cables</strong><br />Route the thick 24-pin power cable from the power supply and plug it into the corresponding slot on the right side of the motherboard. Route the 8-pin CPU power cable from the power supply and plug it into the top left side of the motherboard.</li>
          <li class="mb-3"><strong>Step 9: Install the Graphics Card (GPU)</strong><br />Remove the metal expansion slot covers on the back of the case that align with the top PCIe slot on your motherboard. Align the graphics card with the PCIe slot and push down gently until you hear a click. Secure the metal bracket of the GPU to the case with a screw. Connect the PCIe power cables from your power supply to the GPU.</li>
          <li class="mb-3"><strong>Step 10: Connect Case and Front Panel Wires</strong><br />Plug the case's front panel headers (power switch, reset switch, and power LED) into the corresponding pins on the bottom edge of the motherboard. Plug the USB headers and HD Audio cable from the case into their matching slots on the motherboard.</li>
          <li class="mb-3"><strong>Step 11: Final Test and Setup</strong><br />Double-check that all cables are securely fastened and no wires are touching any fans. Plug the PC into a wall outlet, and connect a monitor, keyboard, and mouse. Turn on the power supply and press the power button on the case. Once the system turns on and boots into the motherboard BIOS, you can plug in a USB drive with your operating system to begin the installation.</li>
        </ol>
        <p class="mt-3 mb-0"><strong>If you need help, contact me.</strong></p>
      </div>
    </section>
  `,
};
