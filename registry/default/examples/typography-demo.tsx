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
      <TypographyH1>Taxing Laughter: The Joke Tax Chronicles</TypographyH1>
      <TypographyP>
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </TypographyP>

      <TypographyH2 className="mt-10 transition-colors">
        The King&apos;s Plan
      </TypographyH2>

      <TypographyP>
        The king thought long and hard, and finally came up with{" "}
        <a
          href="#"
          className="text-primary font-medium underline underline-offset-4"
        >
          a brilliant plan
        </a>
        : he would tax the jokes in the kingdom.
      </TypographyP>

      <TypographyBlockquote>
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
        it&apos;s only fair that they should pay for the privilege.&quot;
      </TypographyBlockquote>

      <TypographyH3 className="mt-8">The Joke Tax</TypographyH3>

      <TypographyP>
        The king&apos;s subjects were not amused. They grumbled and complained,
        but the king was firm:
      </TypographyP>

      <TypographyList>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </TypographyList>

      <TypographyP>
        As a result, people stopped telling jokes, and the kingdom fell into a
        gloom. But there was one person who refused to let the king&apos;s
        foolishness get him down: a court jester named Jokester.
      </TypographyP>

      <TypographyH3 className="mt-8">Jokester&apos;s Revolt</TypographyH3>

      <TypographyP>
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king&apos;s pillow, in his
        soup, even in the royal toilet. The king was furious, but he
        couldn&apos;t seem to stop Jokester.
      </TypographyP>

      <TypographyP>
        And then, one day, the people of the kingdom discovered that the jokes
        left by Jokester were so funny that they couldn&apos;t help but laugh.
        And once they started laughing, they couldn&apos;t stop.
      </TypographyP>

      <TypographyH3 className="mt-8">The People&apos;s Rebellion</TypographyH3>

      <TypographyP>
        The people of the kingdom, feeling uplifted by the laughter, started to
        tell jokes and puns again, and soon the entire kingdom was in on the
        joke.
      </TypographyP>

      <TypographyTable>
        <thead>
          <tr className="even:bg-muted m-0 border-t p-0">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              King&apos;s Treasury
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              People&apos;s happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="even:bg-muted m-0 border-t p-0">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </TypographyTable>

      <TypographyP>
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax. Jokester was declared a hero, and
        the kingdom lived happily ever after.
      </TypographyP>

      <TypographyP>
        The moral of the story is: never underestimate the power of a good laugh
        and always be careful of bad ideas.
      </TypographyP>
    </div>
  )
}
