import { Close } from "@mui/icons-material";
import { Box, Dialog, DialogContent, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";

export function VideoModal({onClose, src}: {onClose: () => void, src: string}) {
    const theme = useTheme();
    const breakpointUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const [ controlsOpen, setcontrolsOpen ] = useState<boolean>(false);
    
    useEffect(() => {
      if(!controlsOpen) return;
    
      const timeout = setTimeout(() => {
        setcontrolsOpen(false);
      }, 2000)
      return () => clearTimeout(timeout);
    }, [controlsOpen])
    
    return (
        <Dialog
            open={true}
            onClose={onClose}
            id="video-dialog"
        >
            <DialogContent sx={{p: 0}} onClick={() => breakpointUpMd ? undefined : setcontrolsOpen(!controlsOpen)}>
                <IconButton 
                    id="video-close-button"
                    onClick={onClose} 
                    sx={{
                        position: 'absolute', 
                        zIndex: 1, 
                        top: 0,
                        right: 0, 
                        color: theme.palette.secondary.light,
                        transition: 'opacity 0.3s ease-in-out', 
                        opacity: breakpointUpMd || !controlsOpen ? 0 : 1,
                        "&:hover": {
                            opacity: 1
                        }
                    }}>
                    <Close />
                </IconButton>
                <Box 
                    component={'video'}
                    id='video-project'
                    display='flex'
                    overflow='hidden'
                    controls={breakpointUpMd || controlsOpen ? true : false}
                    autoPlay 
                    style={{width: '100%', maxHeight: '85vh', objectFit: 'cover'}}
                    onClick={e => !breakpointUpMd && e.preventDefault()}
                >
                    <source src={src} type="video/mp4" id="video-source" />
                </Box>
            </DialogContent>
        </Dialog>
    )
}
