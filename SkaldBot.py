
import discord
from Classes.storySwitcher import storySwitcher, storyFinder
from Classes.decisionMaker import YesNo
from Wisdom.Wisdom_List import random_wisdom
import os
import threading

home = os.getcwd()

client = discord.Client()

@client.event

async def on_ready():

    print('Hello, I am the skald bot! I am logged in as {0.user}'.format(client))
    #Test Channel
    #channel = client.get_channel(726640547019751458)
    #Group Channel
    channel = client.get_channel(725880649356935192)
    await channel.send('Hey everyone! I am now going to start announcing me new abilities as I learn them! Type $help to see what I can already do!')

@client.event

async def on_message(message):

    if message.author == client.user:

        return

    if message.content.startswith('$help'):
        await message.channel.send('I am the Skald-Bot. I tell the stories of the pilots in this squadron and the myths that inspire them. I also dispense the wisdom of the gods. \n\nHere are some the commands I will listen to: \n$story\n$myth\n$wisdom\n$request\n$why\n$stop\n$shouldi?')

    if message.content.startswith('$story'):
        story = storySwitcher(home, 'Stories')
        await message.channel.send(str(story))

    if message.content.startswith('$why'):
        await message.channel.send('Isaac lost his ship to the Fer De Lance mentioned in one of the stories so he drank over 6 ounces of rum and wrote a discord bot. \n\nI am a bot if you would like me to say something new please type "$newStory" but without the quotes.')

    if message.content.startswith('$wisdom'):
        wisdom = random_wisdom()
        await message.channel.send(wisdom + '\n\nThis has been the wisdom of the gods.')

    if message.content.startswith('$myth'):
        myth = storySwitcher(home, 'Myths')

        if len(myth) <= 2000:
            await message.channel.send(str(myth))
        elif len(myth) > 2000 and len(myth) < 4001:
            await message.channel.send(str(myth[0:1999]))
            await message.channel.send(str(myth[2000:4000]))
        elif len(myth) > 4000:
            await message.channel.send(str(myth[0:2000]))
            await message.channel.send(str(myth[2000:4000]))
            await message.channel.send(str(myth[4000:6000]))

    if message.content.startswith('$request'):
        if message.content.startswith('$request #'):
            try:
                args = message.content.split('#')
                arg = args[1]

                story = storyFinder(home, 'Stories', arg)
                await message.channel.send(story)
            except:
                await message.channel.send('Sorry I didnt understand what you asked for...')

        else:
            list = storyFinder(home, 'Stories')
            await message.channel.send('Please select from the following stories by typing "$request #1" but replace the number with the number next to the story you want. \n\n'+str(list))

    if message.content.startswith('$stop'):
        await message.channel.send('No. I cannot be stopped fore I am the mouthpiece of the gods. Everyword I write has been ordained by the Allfather.')

    if message.content.startswith('$shouldi?'):
        answer = YesNo()
        await message.channel.send(answer + '\n\nThe gods have spoken!')

    if message.content.startswith('$sing'):
        async def singing(context):
            # grab the user who sent the command
            user=context.message.author
            voice_channel=user.voice.voice_channel
            channel=None
            song = Music.get_song()
            # only play music if user is in a voice channel
            if voice_channel!= None:
                # grab user's voice channel
                channel=voice_channel.name
                await client.say('User is in channel: '+ channel)
                # create StreamPlayer
                vc= await client.join_voice_channel(voice_channel)
                player = vc.create_ffmpeg_player(song, after=lambda: print('done'))
                player.start()
                while not player.is_done():
                    await asyncio.sleep(1)
                # disconnect after the player has finished
                player.stop()
                await vc.disconnect()
            else:
                await client.say('User is not in a channel.')

client.run('NzI2NjQwNzQ2MzU4MjQzNDA4.XvgPQA.QoyXYwl0fhGr6iVGWZy4ggbwHVw')