import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyList,
  TypographyP,
  TypographyTable,
} from "@/registry/default/ui/typography"

export default function TypographyDemo() {
  return (
    <div>
      <TypographyH1>The Hidden Valley Discovery</TypographyH1>
      <TypographyP>
        After three days of hiking through dense forest, Maya finally reached
        the ridge overlooking the mysterious valley that had appeared on no map
        she&apos;d ever seen.
      </TypographyP>

      <TypographyH2 className="mt-10 transition-colors">
        The Ancient Trail
      </TypographyH2>

      <TypographyP>
        The weathered stone markers led deeper into the wilderness, each one
        carved with symbols that seemed to{" "}
        <a
          href="#"
          className="text-primary font-medium underline underline-offset-4"
        >
          tell a story
        </a>
        . Local legends spoke of a civilization that vanished centuries ago,
        leaving only traces for those bold enough to seek them.
      </TypographyP>

      <TypographyBlockquote>
        &quot;The mountains keep their secrets well, but they reward those who
        listen to the whispers carried by the wind through the pines.&quot;
      </TypographyBlockquote>

      <TypographyH3 className="mt-8">Essential Gear</TypographyH3>

      <TypographyP>
        Maya had learned from previous expeditions that success in the
        wilderness depended on careful preparation. Her pack contained:
      </TypographyP>

      <TypographyList>
        <li>
          Waterproof shelter and sleeping system rated for mountain weather
        </li>
        <li>
          Navigation tools including compass, GPS, and detailed topographic maps
        </li>
        <li>
          Emergency supplies with extra food, water purification, and first aid
        </li>
      </TypographyList>

      <TypographyP>
        Each item had been tested on countless adventures. In the backcountry,
        reliability wasn&apos;t just convenience—it was survival. The weight of
        every ounce mattered when facing steep ascents and unpredictable
        conditions.
      </TypographyP>

      <TypographyH3 className="mt-8">Weather Observations</TypographyH3>

      <TypographyTable>
        <thead>
          <tr className="even:bg-muted m-0 border-t p-0">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Time of Day
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Conditions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Dawn
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Misty valleys, clear peaks
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Midday
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Bright sun, building clouds
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Evening
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Golden light, gentle breeze
            </td>
          </tr>
        </tbody>
      </TypographyTable>

      <TypographyP>
        As the sun set behind the distant peaks, Maya realized that the real
        treasure wasn&apos;t the destination, but the journey itself and the
        stories it would give her to share around future campfires.
      </TypographyP>
    </div>
  )
}
