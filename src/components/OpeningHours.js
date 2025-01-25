import React from 'react';
import Sheet from 'react-modal-sheet';
import './OpeningHours.css';

//RI
import ArrowUpSLineIcon from 'remixicon-react/ArrowUpSLineIcon';
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';

function OpeningHours() {

    const [isOpen, setOpen] = React.useState(false);

  return (
      <>
      <div className='opening-hours-container'>
          <span className='opening-hours-title'>
              Öffnungs-<br/>zeiten
          </span>
          <div className='opening-hours-wrapper'>
                <div className='opening-hours-day-wrapper'>
                    <span className='opening-hours-day'>Dienstag</span>
                    <span className='opening-hours-hours'>09:00 - 12:00</span>
                    <span className='opening-hours-hours'>13:00 - 17:00</span>
                </div>
                <div className='opening-hours-day-wrapper'>
                    <span className='opening-hours-day'>Mittwoch</span>
                    <span className='opening-hours-hours'>08:00 - 12:00</span>
                    <span className='opening-hours-hours'>13:30 - 18:00</span>
                </div>
                <div className='opening-hours-day-wrapper'>
                    <span className='opening-hours-day'>Donnerstag</span>
                    <span className='opening-hours-hours'>09:00 - 18:00</span>
                </div>
                <div className='opening-hours-day-wrapper'>
                    <span className='opening-hours-day'>Freitag</span>
                    <span className='opening-hours-hours'>08:00 - 12:00</span>
                    <span className='opening-hours-hours'>13:00 - 18:00</span>
                </div>
                <div className='opening-hours-day-wrapper'>
                    <span className='opening-hours-day'>Samstag</span>
                    <span className='opening-hours-hours'>08:00 - 12:00</span>
                </div>
          </div>
      </div>

      {/* mobile bottom modal */}
      <div className='opening-hours-mobile-modal' onClick={() => setOpen(true)}>
          <span className='opening-hours-mobile-title'>
              Öffnungszeiten
              <ArrowUpSLineIcon  className='icon-ri-arrow-up'  />
          </span>
      </div>

      <Sheet 
        isOpen={isOpen} 
        onClose={() => setOpen(false)}
        snapPoints={[-80]}
        >
        <Sheet.Container>
          <Sheet.Header>
              <div className='modal-sheet-header'>Öffnungszeiten</div>
          </Sheet.Header>
          <Sheet.Content>
              <div className='modal-sheet-content-wrapper'>
                <table className='modal-sheet-content-table'>
                    <tr className='modal-sheet-content-row'>
                        <td className='day-cell'>Dienstag</td>
                        <td className='ohours-cell'>09:00 - 17:00</td>
                    </tr>
                    <tr className='modal-sheet-content-row'>
                        <td className='day-cell' rowSpan='2'>Mittwoch</td>
                        <td className='ohours-cell no-border no-pad-bottom'>08:00 - 12:00</td>
                    </tr>
                    <tr className='modal-sheet-content-row'>
                        <td className='ohours-cell no-pad-top'>13:30 - 18:00</td>
                    </tr>
                    <tr className='modal-sheet-content-row'>
                        <td className='day-cell'>Donnerstag</td>
                        <td className='ohours-cell'>08:00 - 18:00</td>
                    </tr>
                    <tr className='modal-sheet-content-row'>
                        <td className='day-cell' rowSpan='2'>Freitag</td>
                        <td className='ohours-cell no-border no-pad-bottom'>08:00 - 12:00</td>
                    </tr>
                    <tr className='modal-sheet-content-row'>
                        <td className='ohours-cell no-pad-top'>13:30 - 18:00</td>
                    </tr>
                    <tr className='modal-sheet-content-row'>
                        <td className='day-cell no-border'>Samstag</td>
                        <td className='ohours-cell no-border'>08:00 - 12:00</td>
                    </tr>
                </table>
                
              <ArrowDownSLineIcon  className='icon-ri-arrow-down'  onClick={() => setOpen(false)} />
              </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onClick={() => setOpen(false)} />
      </Sheet>
      </>
  );
}

export default OpeningHours;
