import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <img
        height="233"
        width="500"
        alt="Partytown github fit 2x"
        src="https://user-images.githubusercontent.com/452425/134568488-f36f4640-9ada-4a78-a969-2b8315cf7f47.png"
      />
      <span style={{ paddingTop: '20px', fontSize: '21px', fontWeight: 700 }}>
        Check the console, PartyTown runs the script!
      </span>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'PartyTown + Qwik Example',
  meta: [{ name: 'description', content: 'PartyTown + Qwik Example' }],
};
