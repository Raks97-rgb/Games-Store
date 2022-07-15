import React, { useState } from 'react';
import { Grid, Typography, Box, Stack, Button } from '@mui/material';

function GameStore() {
    
    const[item,Setitem]=useState(3500000);

    const[open,setOpen]=useState(true);

    const handleOpen = () => {
        setOpen(!open);
    }
   
    const[item1,Setitem1]=useState(240000);

    const[close,setClose]=useState(true);

    const handleClose = () => {
    setClose(!close);
    }

    const[item2,Setitem2]=useState(100000);

    const[hideitem2,Sethideitem2]=useState(false);

    const handleitem2 = () => {
        Sethideitem2(!hideitem2);
    }

    const[item3,Setitem3]=useState(149999);

    const[hideitem3,Sethideitem3]=useState(false);

    const handleitem3 = () => {
        Sethideitem3(!hideitem3);
    }
  
    const[item4,Setitem4]=useState(114335000);

    const[hideitem4,Sethideitem4]=useState(false);

    const handleitem4 = () => {
        Sethideitem4(!hideitem4);
    }

    const[item5,Setitem5]=useState(150000000);

    const[hideitem5,Sethideitem5]=useState(false);

    const handleitem5 = () => {
        Sethideitem5(!hideitem5);
    }

    const[item6,Setitem6]=useState(10000000);

    const[hideitem6,Sethideitem6]=useState(false);

    const handleitem6 = () => {
        Sethideitem6(!hideitem6);
    }

    const[item7,Setitem7]=useState(134999);

    const[hideitem7,Sethideitem7]=useState(false);

    const handleitem7 = () => {
        Sethideitem7(!hideitem7);
    }

    return (
        <Box sx={{ backgroundColor: 'black', color: 'white' }}>
            <Grid container display='flex' flexDirection='row' justifyContent='center'>
                <Grid item>
                    <Typography variant='h3' align='center' style={{ color: '#ff9800', fontFamily: 'fantasy' }}>Games Store</Typography>
                </Grid>
            </Grid>
            <Grid container display='flex' flexDirection='row' justifyContent='center' columnSpacing={3} pt={5}>
                <Grid item display='flex' flexDirection='column'>
                    <Grid container display='flex' flexDirection='column' alignContent='center' columnSpacing={2}>
                        <Grid item diaply='flex' flexDirection='column'>
                            <Grid item display='flex' flexDirection='row'>
                                <Grid container display='flex' flexDirection='row' columnSpacing={25}>
                                    <Grid item>
                                        <Typography>CR90 corvette</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>$ {item}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item display='flex' flexDirection='row'>
                                <Grid container display='flex' flexDirection='row' columnSpacing={25}>
                                    <Grid item>
                                        <Typography>CR90 corvette</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Stack spacing={2} direction='row'>
                                            <Button variant='contained' onClick={() => {Setitem(Math.max(item - 3500000, 0))}} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>-</Button>
                                            <Button variant='contained' onClick={() => {Setitem(item + 3500000)}} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>+</Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid container display='flex' flexDirection='column' alignContent='center' columnSpacing={2} pt={3}>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={15}>
                                <Grid item>
                                    <Typography>Sentinel-class landing craft</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>$ {item1}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={15}>
                                <Grid item>
                                    <Typography>Sentinel-class landing craft</Typography>
                                </Grid>
                                <Grid item>
                                    <Stack spacing={2} direction='row'>
                                        <Button variant='contained' onClick={() => Setitem1(Math.max(item1 - 240000,0))} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>-</Button>
                                        <Button variant='contained' onClick={() => Setitem1(item1 + 240000)} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>+</Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container display='flex' flexDirection='column' alignContent='center' columnSpacing={2} pt={3}>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={25}>
                                <Grid item>
                                    <Typography>Millenium Falcon</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>$ {item2}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={18}>
                                <Grid item>
                                    <Typography>YT-1300 light freighter</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' onClick={handleitem2} style={{ background: '#616161', textTransform: 'inherit' }}>Add To Cart</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container display='flex' flexDirection='column' alignContent='center' columnSpacing={2} pt={3}>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={35}>
                                <Grid item>
                                    <Typography>X-wing</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>$ {item3}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={28}>
                                <Grid item>
                                    <Typography>T-65 X-wing</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' onClick={handleitem3}  style={{ background: '#616161', textTransform: 'inherit' }}>Add To Cart</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container display='flex' flexDirection='column' alignContent='center' columnSpacing={2} pt={3}>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={32}>
                                <Grid item>
                                    <Typography>Exceutor</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>${item4}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={8}>
                                <Grid item>
                                    <Typography>Exceutive-class star dreadnought</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' onClick={handleitem4} style={{ background: '#616161', textTransform: 'inherit' }}>Add To Cart</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item display='flex' flexDirection='column'>
                    <Grid container display='flex' flexDirection='column' alignContent='center' columnSpacing={2}>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={23}>
                                <Grid item>
                                    <Typography>Star Destroyer</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>$ {item5}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={7}>
                                <Grid item>
                                    <Typography>Imperial 1-class Star Desrtroyer</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' onClick={handleitem5} style={{ background: '#616161', textTransform: 'inherit' }}>Add To Cart</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container display='flex' flexDirection='column' alignContent='center' columnSpacing={2} pt={3}>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={25}>
                                <Grid item>
                                    <Typography>Death Star</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>$ {item6}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={12}>
                                <Grid item>
                                    <Typography>DS-1 Orbital Battle Station</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' onClick={handleitem6} style={{ background: '#616161', textTransform: 'inherit' }}>Add To Cart</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container display='flex' flexDirection='column' alignContent='center' columnSpacing={2} pt={3}>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={30}>
                                <Grid item>
                                    <Typography>Y-wing</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>$ {item7}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={26}>
                                <Grid item>
                                    <Typography>BTL Y-wing</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' onClick={handleitem7} style={{ background: '#616161', textTransform: 'inherit' }}>Add To Cart</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container display='flex' flexDirection='column' alignContent='center' columnSpacing={2} pt={3}>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={22}>
                                <Grid item>
                                    <Typography>TIE Advanced x 1</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>Unavailable</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={10}>
                                <Grid item>
                                    <Typography>Twin lon Engine Advanced x 1</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' disabled style={{ background: '#616161', textTransform: 'inherit' }}>Add To Cart</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container display='flex' flexDirection='column' alignContent='center' columnSpacing={2} pt={3}>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={24}>
                                <Grid item>
                                    <Typography>Rebel transport</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>Unavailable</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item display='flex' flexDirection='row'>
                            <Grid container display='flex' flexDirection='row' columnSpacing={15}>
                                <Grid item>
                                    <Typography>GR-75 medium transport</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' disabled style={{ background: '#616161', textTransform: 'inherit' }}>Add To Cart</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container display='flex' flexDirection='row' pt={5} justifyContent='center'>
                <Grid item>
                    <Typography>Go to first Previous Next Go to last</Typography>
                </Grid>
            </Grid>
            {open &&
            <Grid container display='flex' flexDirection='row' justifyContent='center' spacing={5} pt={2} pb={2}>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Button variant='contained' onClick={handleOpen} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>x</Button>
                </Grid>
                <Grid item display='flex' flexDirection='column' justifyContent='center'>
                    <Typography>CR90 corvette</Typography>
                </Grid>
                <Grid item>
                    <Typography>2 x $ 3,500,000</Typography>
                </Grid>
                <Grid item>
                    <Typography>$ {item}</Typography>
                </Grid>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Stack spacing={2} direction='row'>
                        <Button variant='contained' onClick={()=>Setitem(Math.max(item - 3500000,0))} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>-</Button>
                        <Button variant='contained' onClick={()=>Setitem(item + 3500000)} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>+</Button>
                    </Stack>
                </Grid>
            </Grid>
            }
            {close &&
            <Grid container display='flex' flexDirection='row' justifyContent='center' spacing={5} pt={2} pb={2}>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Button variant='contained' onClick={handleClose} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>x</Button>
                </Grid>
                <Grid item display='flex' flexDirection='column' justifyContent='center'>
                    <Typography>Sentinel-class </Typography>
                </Grid>
                <Grid item>
                    <Typography>1 x $ 2,400,000</Typography>
                </Grid>
                <Grid item>
                    <Typography>$ {item1}</Typography>
                </Grid>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Stack spacing={2} direction='row'>
                        <Button variant='contained' onClick={()=>Setitem1(Math.max(item1 - 2400000,0))} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>-</Button>
                        <Button variant='contained' onClick={()=>Setitem1(item1 + 2400000)} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>+</Button>
                    </Stack>
                </Grid>
            </Grid>
            }
            {hideitem2 &&
             <Grid container display='flex' flexDirection='row' justifyContent='center' spacing={5} pt={2} pb={2}>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Button variant='contained' onClick={handleitem2} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>x</Button>
                </Grid>
                <Grid item display='flex' flexDirection='column' justifyContent='center'>
                    <Typography>Millenium Falcon </Typography>
                </Grid>
                <Grid item>
                    <Typography>1 x $ 100,000</Typography>
                </Grid>
                <Grid item>
                    <Typography>$ {item2}</Typography>
                </Grid>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Stack spacing={2} direction='row'>
                        <Button variant='contained' onClick={()=>Setitem2(Math.max(item2 - 100000,0))} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>-</Button>
                        <Button variant='contained' onClick={()=>Setitem2(item2 + 100000)} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>+</Button>
                    </Stack>
                </Grid>
            </Grid>
            }
             {hideitem3 &&
             <Grid container display='flex' flexDirection='row' justifyContent='center' spacing={7} pt={2} pb={2}>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Button variant='contained' onClick={handleitem3} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>x</Button>
                </Grid>
                <Grid item display='flex' flexDirection='column' justifyContent='center'>
                    <Typography>X-Wing</Typography>
                </Grid>
                <Grid item>
                    <Typography>1 x $ 149,999</Typography>
                </Grid>
                <Grid item>
                    <Typography>$ {item3}</Typography>
                </Grid>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Stack spacing={2} direction='row'>
                        <Button variant='contained' onClick={()=>Setitem3(Math.max(item3 - 149999,0))} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>-</Button>
                        <Button variant='contained' onClick={()=>Setitem3(item3 + 149999)} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>+</Button>
                    </Stack>
                </Grid>
            </Grid>
            }
             {hideitem4 &&
             <Grid container display='flex' flexDirection='row' justifyContent='center' spacing={5} pt={2} pb={2}>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Button variant='contained' onClick={handleitem4} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>x</Button>
                </Grid>
                <Grid item display='flex' flexDirection='column' justifyContent='center'>
                    <Typography>Exceutor</Typography>
                </Grid>
                <Grid item>
                    <Typography>1 x $ 114,335,000</Typography>
                </Grid>
                <Grid item>
                    <Typography>$ {item4}</Typography>
                </Grid>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Stack spacing={2} direction='row'>
                        <Button variant='contained' onClick={()=>Setitem4(Math.max(item4 - 114350000,0))} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>-</Button>
                        <Button variant='contained' onClick={()=>Setitem4(item4 + 114350000)} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>+</Button>
                    </Stack>
                </Grid>
            </Grid>
            }
             {hideitem5 &&
             <Grid container display='flex' flexDirection='row' justifyContent='center' spacing={4} pt={2} pb={2}>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Button variant='contained' onClick={handleitem5} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>x</Button>
                </Grid>
                <Grid item display='flex' flexDirection='column' justifyContent='center'>
                    <Typography>Star Destroyer</Typography>
                </Grid>
                <Grid item>
                    <Typography>1 x $ 150,000,000</Typography>
                </Grid>
                <Grid item>
                    <Typography>$ {item5}</Typography>
                </Grid>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Stack spacing={2} direction='row'>
                        <Button variant='contained' onClick={()=>Setitem5(Math.max(item5 - 1500000,0))} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>-</Button>
                        <Button variant='contained' onClick={()=>Setitem5(item5 + 1500000)} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>+</Button>
                    </Stack>
                </Grid>
            </Grid>
            }
             {hideitem6 &&
             <Grid container display='flex' flexDirection='row' justifyContent='center' spacing={5} pt={2} pb={2}>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Button variant='contained' onClick={handleitem6} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>x</Button>
                </Grid>
                <Grid item display='flex' flexDirection='column' justifyContent='center'>
                    <Typography>Death Star</Typography>
                </Grid>
                <Grid item>
                    <Typography>1 x $ 1,000,000</Typography>
                </Grid>
                <Grid item>
                    <Typography>$ {item6}</Typography>
                </Grid>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Stack spacing={2} direction='row'>
                        <Button variant='contained' onClick={()=>Setitem6(Math.max(item6 - 1000000,0))} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>-</Button>
                        <Button variant='contained' onClick={()=>Setitem6(item6 + 1000000)} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>+</Button>
                    </Stack>
                </Grid>
            </Grid>
            }
             {hideitem7 &&
             <Grid container display='flex' flexDirection='row' justifyContent='center' spacing={6} pt={2} pb={2}>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Button variant='contained' onClick={handleitem7} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>x</Button>
                </Grid>
                <Grid item display='flex' flexDirection='column' justifyContent='center'>
                    <Typography>Y - Wing</Typography>
                </Grid>
                <Grid item>
                    <Typography>1 x $ 1,000,000</Typography>
                </Grid>
                <Grid item>
                    <Typography>$ {item7}</Typography>
                </Grid>
                <Grid item display='flex' flexDirection='row' justifyContent='center'>
                    <Stack spacing={2} direction='row'>
                        <Button variant='contained' onClick={()=>Setitem7(Math.max(item7 - 134999,0))} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>-</Button>
                        <Button variant='contained' onClick={()=>Setitem7(item7 + 134999)} style={{ background: '#616161', minHeight: '10px', minWidth: '10px' }}>+</Button>
                    </Stack>
                </Grid>
            </Grid>
            }
            <Box sx={{ border: '1px solid white', width: '100%' }}></Box>
            <Grid container display='flex' flexDirection='row' justifyContent='center' spacing={5} pt={3}>
                <Grid item display='flex' flexDirection='row' columnGap={8}>
                    <Grid item></Grid>
                    <Grid item></Grid>
                    <Grid item>
                        <Typography>Total</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>3 Spaceships</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>$ {item+item1+item2+item3+item4+item5+item6+item7}</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant='contained' style={{ background: '#616161', textTransform: 'inherit' }}>Clear Cart</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GameStore;