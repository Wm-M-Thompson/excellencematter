export default function Interaction() {
  return (
    <div style={{ 
      width: '100%',
      height: 'calc(100vh - 64px)',
      overflow: 'hidden'
    }}>
      <iframe
        src="https://bbpress.excellencematter.net/interaction/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="LikableLogic Forum"
      />
    </div>
  );
}